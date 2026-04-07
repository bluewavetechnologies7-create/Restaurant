import React, { useState, useEffect } from "react";
import { auth, signInWithEmailAndPassword, updatePassword, updateEmail, EmailAuthProvider, reauthenticateWithCredential, db } from "./firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useLanguage } from "./App";

export default function AdminSetup() {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const [currentEmail, setCurrentEmail] = useState("admin@restaurant.com");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newAdminEmail, setNewAdminEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAdminEmail = async () => {
      try {
        const snapshot = await getDoc(doc(db, 'settings', 'admin'));
        if (snapshot.exists()) {
          const email = snapshot.data().adminEmail;
          setCurrentEmail(email);
          setNewAdminEmail(email);
        }
      } catch (err) {
        console.error("Error fetching admin email:", err);
      }
    };
    fetchAdminEmail();
  }, []);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    try {
      // Step 1: Sign in with current credentials
      const userCredential = await signInWithEmailAndPassword(
        auth,
        currentEmail,
        currentPassword
      );
      const user = userCredential.user;

      // Step 2: Re-authenticate (required by Firebase before sensitive changes)
      const credential = EmailAuthProvider.credential(
        currentEmail,
        currentPassword
      );
      await reauthenticateWithCredential(user, credential);

      // Step 3: Update password if provided
      if (newPassword) {
        await updatePassword(user, newPassword);
      }

      // Step 4: Update admin email in Firebase Auth and Firestore if changed
      if (newAdminEmail && newAdminEmail !== currentEmail) {
        // Update in Firebase Auth
        await updateEmail(user, newAdminEmail);
        
        // Update in Firestore
        await setDoc(doc(db, 'settings', 'admin'), {
          adminEmail: newAdminEmail
        });
        
        setCurrentEmail(newAdminEmail);
      }

      setMessage(
        isAr 
          ? `تم تحديث بيانات المسؤول بنجاح!\n${newPassword ? "تم تحديث كلمة المرور." : ""}\n${newAdminEmail !== currentEmail ? "تم تحديث البريد الإلكتروني للمسؤول." : ""}`
          : `Admin credentials updated successfully!\n${newPassword ? "Password updated." : ""}\n${newAdminEmail !== currentEmail ? "Admin email updated in Auth and Settings." : ""}`
      );
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-20 px-6" dir={isAr ? "rtl" : "ltr"}>
      <div style={{ maxWidth: 400, margin: "0 auto", padding: 24, background: 'white', borderRadius: 12, boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
        <h2 className="text-2xl font-serif font-bold mb-2">{isAr ? "تحديث بيانات المسؤول" : "Update Admin Credentials"}</h2>
        <p style={{ color: "#666", marginBottom: 24 }}>
          {isAr ? "قم بتشغيل هذا مرة واحدة قبل التسليم للعميل." : "Run this once before handing over to the client."}
        </p>

        <form onSubmit={handleUpdate}>
          <div style={{ marginBottom: 16 }}>
            <label className="text-sm font-bold text-gray-700">{isAr ? "كلمة المرور الحالية" : "Current Password"}</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
              placeholder={isAr ? "أدخل كلمة المرور الحالية" : "Enter current password"}
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: 16 }}>
            <label className="text-sm font-bold text-gray-700">{isAr ? "بريد المسؤول الجديد" : "New Admin Email (for handover)"}</label>
            <input
              type="email"
              value={newAdminEmail}
              onChange={(e) => setNewAdminEmail(e.target.value)}
              placeholder={isAr ? "أدخل بريد المسؤول الجديد" : "Enter new admin email"}
              style={inputStyle}
            />
            <p className="text-[10px] text-gray-500 mt-1 italic">
              * {isAr ? "سيؤدي هذا إلى تحديث البريد الإلكتروني المصرح به في النظام." : "This will update the authorized email in the system."}
            </p>
          </div>

          <div style={{ marginBottom: 16 }}>
            <label className="text-sm font-bold text-gray-700">{isAr ? "كلمة المرور الجديدة (اختياري)" : "New Password (optional)"}</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder={isAr ? "اتركه فارغاً للاحتفاظ بالحالية" : "Leave blank to keep current"}
              style={inputStyle}
            />
          </div>

          <button type="submit" disabled={loading} style={buttonStyle}>
            {loading ? (isAr ? "جاري التحديث..." : "Updating...") : (isAr ? "تحديث بيانات المسؤول" : "Update Admin Credentials")}
          </button>
        </form>

        {message && (
          <p style={{ color: "green", marginTop: 16, whiteSpace: 'pre-line' }}>{message}</p>
        )}
        {error && (
          <p style={{ color: "red", marginTop: 16 }}>{error}</p>
        )}
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  padding: "10px",
  marginTop: 6,
  borderRadius: 6,
  border: "1px solid #ccc",
  fontSize: 14,
  boxSizing: "border-box",
};

const buttonStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px",
  background: "#7A1B1B",
  color: "#fff",
  border: "none",
  borderRadius: 6,
  fontSize: 15,
  cursor: "pointer",
};
