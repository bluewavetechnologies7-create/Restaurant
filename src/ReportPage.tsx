import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { useLanguage } from "./App";
import {
  collection, query, where, orderBy, getDocs, Timestamp, limit,
} from "firebase/firestore";
import { LayoutDashboard, Download, FileText, Calendar, RefreshCw } from "lucide-react";

interface Order {
  id: string;
  orderId: string;
  items: string;
  amount: number;
  source: string;
  date: Timestamp;
}

export default function ReportPage() {
  const { language, t } = useLanguage();
  const isAr = language === 'ar';
  const [orders, setOrders] = useState<Order[]>([]);
  const [range, setRange] = useState<"daily" | "weekly">("weekly");
  const [loading, setLoading] = useState(true);

  const getDateRange = () => {
    const now = new Date();
    const start = new Date();
    if (range === "daily") {
      start.setHours(0, 0, 0, 0);
    } else {
      start.setDate(now.getDate() - 7);
      start.setHours(0, 0, 0, 0);
    }
    return { start, end: now };
  };

  const getRangeLabel = () => {
    const { start } = getDateRange();
    const fmt = (d: Date) =>
      d.toLocaleDateString(isAr ? "ar-SA" : "en-GB", {
        day: "numeric", month: "long", year: "numeric",
      });
    return range === "daily"
      ? fmt(new Date())
      : `${fmt(start)} – ${fmt(new Date())}`;
  };

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const { start } = getDateRange();
        const q = query(
          collection(db, "orders"),
          where("date", ">=", Timestamp.fromDate(start)),
          orderBy("date", "desc"),
          limit(500)
        );
        const snap = await getDocs(q);
        setOrders(snap.docs.map((d) => ({ id: d.id, ...d.data() } as Order)));
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [range]);

  const summaryStats = React.useMemo(() => {
    const totalRevenue = orders.reduce((s, o) => s + (o.amount || 0), 0);
    const online = orders.filter((o) => o.source === "Online" || o.source === "online").length;
    const offline = orders.filter((o) => o.source === "Offline" || o.source === "offline").length;
    return { totalRevenue, online, offline };
  }, [orders]);

  const { totalRevenue, online, offline } = summaryStats;
  const generatedAt = React.useMemo(() => new Date().toLocaleString(isAr ? "ar-SA" : "en-GB"), [orders, isAr]);

  // ── CSV Download ──────────────────────────────────────────
  const downloadCSV = () => {
    const headers = isAr 
      ? ["#", "رقم الطلب", "الأصناف", "التاريخ", "الوقت", "المبلغ", "المصدر"]
      : ["#", "Order ID", "Items", "Date", "Time", "Amount", "Source"];
    const rows = orders.map((o, i) => {
      const d = o.date.toDate();
      return [
        i + 1,
        o.orderId,
        `"${o.items.replace(/"/g, '""')}"`,
        d.toLocaleDateString(isAr ? "ar-SA" : "en-GB"),
        d.toLocaleTimeString(isAr ? "ar-SA" : "en-US", { hour: "2-digit", minute: "2-digit" }),
        (o.amount || 0).toFixed(2),
        o.source,
      ];
    });
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8;" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `report-${range}-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  };

  // ── PDF Download ──────────────────────────────────────────
  const downloadPDF = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    const title = range === "weekly" 
      ? (isAr ? "تقرير المبيعات الأسبوعي" : "Weekly Sales Report") 
      : (isAr ? "تقرير المبيعات اليومي" : "Daily Sales Report");
    const rows = orders
      .map(
        (o, i) => {
          const d = o.date.toDate();
          return `
          <tr>
            <td>${i + 1}</td>
            <td>${o.orderId}</td>
            <td>${o.items}</td>
            <td>${d.toLocaleDateString(isAr ? "ar-SA" : "en-GB")}</td>
            <td>${d.toLocaleTimeString(isAr ? "ar-SA" : "en-US", { hour: "2-digit", minute: "2-digit" })}</td>
            <td><strong>${(o.amount || 0).toFixed(2)} SAR</strong></td>
            <td>${o.source}</td>
          </tr>`;
        }
      )
      .join("");

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="${isAr ? 'ar' : 'en'}" dir="${isAr ? 'rtl' : 'ltr'}">
      <head>
        <title>${title}</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Amiri&display=swap');
          body { font-family: ${isAr ? "'Amiri', serif" : "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}; margin: 0; background: #fdfbf7; color: #2d1a1a; }
          .header { background: #7b1c1c; color: #ffffff; padding: 40px 32px; text-align: center; }
          .header h1 { margin: 0 0 8px; font-size: 32px; font-family: serif; font-style: italic; }
          .header p { margin: 0; opacity: 0.9; font-size: 16px; letter-spacing: 1px; }
          .generated { background: #5d1515; color: #f5c6c6; font-size: 11px; padding: 10px 32px; text-align: ${isAr ? 'left' : 'right'}; text-transform: uppercase; letter-spacing: 1px; }
          .summary { display: flex; gap: 20px; padding: 32px; background: #fff; border-bottom: 1px solid #eee; }
          .card { flex: 1; border: 1px solid #e0d8cc; border-radius: 16px; padding: 20px; text-align: center; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.02); }
          .card .label { font-size: 10px; color: #8c7e7e; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 10px; font-weight: bold; }
          .card .value { font-size: 28px; font-weight: 800; color: #7b1c1c; }
          .section { padding: 40px 32px; }
          .section h2 { font-size: 22px; margin-bottom: 20px; color: #7b1c1c; font-family: serif; font-style: italic; border-bottom: 2px solid #7b1c1c; display: inline-block; padding-bottom: 4px; }
          table { width: 100%; border-collapse: separate; border-spacing: 0; font-size: 12px; border: 1px solid #e0d8cc; border-radius: 12px; overflow: hidden; }
          th { background: #7b1c1c; color: #ffffff; padding: 14px 16px; text-align: ${isAr ? 'right' : 'left'}; text-transform: uppercase; letter-spacing: 1px; font-size: 11px; }
          td { padding: 14px 16px; border-bottom: 1px solid #f0e9df; background: #ffffff; text-align: ${isAr ? 'right' : 'left'}; }
          tr:nth-child(even) td { background: #faf8f5; }
          tr:last-child td { border-bottom: none; }
          .total-row td { font-weight: 800; background: #f5ece0 !important; color: #7b1c1c; font-size: 14px; }
          .footer { text-align: center; padding: 30px; font-size: 10px; color: #bbb; letter-spacing: 1px; }
          @media print {
            body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            .card { break-inside: avoid; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>${title}</h1>
          <p>${getRangeLabel()}</p>
        </div>
        <div class="generated">${isAr ? "تم الإنشاء في" : "Report Generated"}: ${generatedAt}</div>
        <div class="summary">
          <div class="card"><div class="label">${isAr ? "إجمالي الطلبات" : "Total Orders"}</div><div class="value">${orders.length}</div></div>
          <div class="card"><div class="label">${isAr ? "أونلاين" : "Online"}</div><div class="value">${online}</div></div>
          <div class="card"><div class="label">${isAr ? "محلي" : "Offline"}</div><div class="value">${offline}</div></div>
          <div class="card"><div class="label">${isAr ? "إجمالي الإيرادات" : "Total Revenue"}</div><div class="value">${totalRevenue.toFixed(2)} SAR</div></div>
        </div>
        <div class="section">
          <h2>${isAr ? "تفاصيل الطلبات" : "Order Details"}</h2>
          <table>
            <thead>
              <tr>
                ${(isAr 
                  ? ["#", "رقم الطلب", "الأصناف", "التاريخ", "الوقت", "المبلغ", "المصدر"]
                  : ["#", "Order ID", "Items", "Date", "Time", "Amount", "Source"]
                ).map(h => `<th>${h}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${rows}
              <tr class="total-row">
                <td colspan="5" style="text-align: ${isAr ? 'left' : 'right'};">${isAr ? "إجمالي الإيرادات" : "TOTAL REVENUE"}</td>
                <td colspan="2">${totalRevenue.toFixed(2)} SAR</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="footer">© ${new Date().getFullYear()} ${isAr ? "نظام إدارة مطعم مُد — سري" : "MUD Restaurant Management System — Confidential"}</div>
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  // ── Styles ────────────────────────────────────────────────
  const S: { [key: string]: any } = {
    page: { fontFamily: isAr ? "'Amiri', serif" : "Arial, sans-serif", background: "#f5f0e8", minHeight: "100vh", paddingTop: '80px', textAlign: isAr ? 'right' : 'left' },
    header: { background: "#7b1c1c", color: "white", padding: "20px 32px" },
    h1: { margin: "0 0 4px", fontSize: 22 },
    sub: { margin: 0, opacity: 0.85, fontSize: 13 },
    generated: { background: "#7b1c1c", color: "#f5c6c6", fontSize: 12, padding: "6px 32px", borderTop: "1px solid #a03030" },
    toolbar: { display: "flex", gap: 10, padding: "20px 32px 0", flexWrap: 'wrap' },
    btn: (active: boolean) => ({
      padding: "8px 20px", borderRadius: 6, border: "2px solid #7b1c1c",
      background: active ? "#7b1c1c" : "white",
      color: active ? "white" : "#7b1c1c",
      fontWeight: "bold", cursor: "pointer", fontSize: 13,
    }),
    dlBtn: (color: string) => ({
      padding: "8px 20px", borderRadius: 6, border: "none",
      background: color, color: "white", fontWeight: "bold",
      cursor: "pointer", fontSize: 13,
    }),
    summary: { display: "flex", gap: 16, padding: "20px 32px", flexWrap: 'wrap' },
    card: { flex: 1, minWidth: '150px', border: "2px solid #7b1c1c", borderRadius: 10, padding: 16, textAlign: "center", background: "white" },
    cardLabel: { fontSize: 11, color: "#888", letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 },
    cardValue: { fontSize: 28, fontWeight: "bold", color: "#7b1c1c" },
    section: { padding: "0 32px 32px" },
    table: { width: "100%", borderCollapse: "collapse", fontSize: 13 },
    th: { background: "#7b1c1c", color: "white", padding: "10px 12px", textAlign: isAr ? "right" : "left" },
    td: { padding: "10px 12px", borderBottom: "1px solid #e0d8cc" },
  };

  return (
    <div style={S.page} dir={isAr ? "rtl" : "ltr"}>
      <div style={S.header}>
        <h1 style={S.h1}>
          {range === "weekly" 
            ? (isAr ? "تقرير المبيعات الأسبوعي" : "Weekly Sales Report") 
            : (isAr ? "تقرير المبيعات اليومي" : "Daily Sales Report")}
        </h1>
        <p style={S.sub}>{getRangeLabel()}</p>
      </div>
      <div style={S.generated}>{isAr ? "تم الإنشاء في" : "Generated"}: {generatedAt}</div>

      {/* Toolbar */}
      <div style={S.toolbar}>
        <button style={S.btn(range === "daily")} onClick={() => setRange("daily")}>{isAr ? "يومي" : "Daily"}</button>
        <button style={S.btn(range === "weekly")} onClick={() => setRange("weekly")}>{isAr ? "أسبوعي" : "Weekly"}</button>
        <div style={{ [isAr ? 'marginRight' : 'marginLeft']: 'auto', display: 'flex', gap: '10px' }}>
          <button style={S.dlBtn("#2e7d32")} onClick={downloadCSV}>{isAr ? "تحميل CSV" : "Download CSV"}</button>
          <button style={S.dlBtn("#1565c0")} onClick={downloadPDF}>{isAr ? "تحميل PDF" : "Download PDF"}</button>
        </div>
      </div>

      {/* Summary Cards */}
      <div style={S.summary}>
        {[
          { label: isAr ? "إجمالي الطلبات" : "Total Orders", value: orders.length },
          { label: isAr ? "أونلاين" : "Online", value: online },
          { label: isAr ? "محلي" : "Offline", value: offline },
          { label: isAr ? "إجمالي الإيرادات" : "Total Revenue", value: `${totalRevenue.toFixed(2)} SAR` },
        ].map((c) => (
          <div key={c.label} style={S.card}>
            <div style={S.cardLabel}>{c.label}</div>
            <div style={S.cardValue}>{c.value}</div>
          </div>
        ))}
      </div>

      {/* Order Table */}
      <div style={S.section}>
        <h2 className="font-serif font-bold text-mud-ink mb-4">{isAr ? "تفاصيل الطلبات" : "Order Details"}</h2>
        {loading ? (
          <div className="flex items-center gap-2 text-mud-ink/60">
            <RefreshCw className="animate-spin" size={20} />
            <p>{isAr ? "جاري تحميل الطلبات..." : "Loading orders..."}</p>
          </div>
        ) : orders.length === 0 ? (
          <p style={{ color: "#888" }}>{isAr ? "لا توجد طلبات لهذه الفترة." : "No orders found for this period."}</p>
        ) : (
          <div className="overflow-x-auto">
            <table style={S.table}>
              <thead>
                <tr>
                  {(isAr 
                    ? ["#", "رقم الطلب", "الأصناف", "التاريخ", "الوقت", "المبلغ", "المصدر"]
                    : ["#", "Order ID", "Items", "Date", "Time", "Amount", "Source"]
                  ).map((h) => (
                    <th key={h} style={S.th}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {React.useMemo(() => orders.map((o, i) => {
                  const d = o.date.toDate();
                  return (
                    <tr key={o.id} style={{ background: i % 2 === 0 ? "white" : "#faf7f0" }}>
                      <td style={S.td}>{i + 1}</td>
                      <td style={S.td}>{o.orderId}</td>
                      <td style={S.td}>{o.items}</td>
                      <td style={S.td}>{d.toLocaleDateString(isAr ? "ar-SA" : "en-GB")}</td>
                      <td style={S.td}>{d.toLocaleTimeString(isAr ? "ar-SA" : "en-US", { hour: "2-digit", minute: "2-digit" })}</td>
                      <td style={{ ...S.td, fontWeight: "bold" }}>{(o.amount || 0).toFixed(2)} SAR</td>
                      <td style={S.td}>{o.source}</td>
                    </tr>
                  );
                }), [orders, isAr])}
                <tr style={{ background: "#f5ece0" }}>
                  <td colSpan={5} style={{ ...S.td, fontWeight: "bold", textAlign: isAr ? 'left' : 'right' }}>{isAr ? "إجمالي الإيرادات" : "TOTAL REVENUE"}</td>
                  <td colSpan={2} style={{ ...S.td, fontWeight: "bold" }}>{totalRevenue.toFixed(2)} SAR</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        <p style={{ textAlign: "center", fontSize: 11, color: "#999", marginTop: 24 }}>
          {isAr ? "سري — نظام إدارة المطعم" : "Confidential — Restaurant Management System"}
        </p>
      </div>
    </div>
  );
}
