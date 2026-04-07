import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, sendPasswordResetEmail, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { useLanguage } from "./App";

export default function LoginPage() {
  const { language, t } = useLanguage();
  const isAr = language === 'ar';
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "forgot">("login");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [adminEmail, setAdminEmail] = useState("admin@restaurant.com");
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchAdminEmail = async () => {
      try {
        const snapshot = await getDoc(doc(db, 'settings', 'admin'));
        if (snapshot.exists()) {
          setAdminEmail(snapshot.data().adminEmail);
        }
      } catch (err) {
        console.error("Error fetching admin email:", err);
      }
    };
    fetchAdminEmail();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (email !== adminEmail && email !== "armyprince7@gmail.com") {
      setError(isAr ? "فقط حساب المسؤول المخصص يمكنه الوصول إلى هذه اللوحة." : "Only the designated admin account can access this panel.");
      setLoading(false);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage(isAr ? "تم تسجيل الدخول بنجاح!" : "Logged in successfully!");
      navigate("/admin");
    } catch (err: any) {
      setError(isAr ? "البريد الإلكتروني أو كلمة المرور غير صحيحة." : "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage(isAr ? `تم إرسال بريد إعادة تعيين كلمة المرور إلى ${email}. تحقق من بريدك الوارد.` : `Password reset email sent to ${email}. Check your inbox.`);
    } catch (err: any) {
      setError(isAr ? "تعذر إرسال بريد إعادة التعيين. تأكد من صحة البريد الإلكتروني." : "Could not send reset email. Make sure the email is correct.");
    } finally {
      setLoading(false);
    }
  };

  const getTitle = () => {
    if (mode === "login") return isAr ? "دخول المسؤول" : "Admin Login";
    return isAr ? "إعادة تعيين كلمة المرور" : "Reset Password";
  };

  const getSubtitle = () => {
    if (mode === "login") return isAr ? "قم بتسجيل الدخول إلى لوحة التحكم الخاصة بك" : "Sign in to your dashboard";
    return isAr ? "أدخل بريدك الإلكتروني لتلقي رابط إعادة التعيين" : "Enter your email to receive a reset link";
  };

  const getButtonText = () => {
    if (loading) return isAr ? "يرجى الانتظار..." : "Please wait...";
    if (mode === "login") return isAr ? "تسجيل الدخول" : "Sign In";
    return isAr ? "إرسال رابط إعادة التعيين" : "Send Reset Link";
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (mode === "login") return handleLogin(e);
    return handleForgotPassword(e);
  };

  return (
    <div className="pt-32 pb-20 px-6" dir={isAr ? "rtl" : "ltr"}>
      <div style={{ maxWidth: 380, margin: "0 auto", padding: 32, border: "1px solid #eee", borderRadius: 12, background: 'white', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
        <h2 style={{ marginBottom: 4, fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'serif' }}>
          {getTitle()}
        </h2>
        <p style={{ color: "#888", marginBottom: 24, fontSize: 14 }}>
          {getSubtitle()}
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 13, color: "#555", fontWeight: 'bold' }}>{isAr ? "البريد الإلكتروني" : "Email"}</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              style={inputStyle}
            />
          </div>

          {mode === "login" && (
            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 13, color: "#555", fontWeight: 'bold' }}>{isAr ? "كلمة المرور" : "Password"}</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                style={inputStyle}
              />
            </div>
          )}

          <button type="submit" disabled={loading} style={buttonStyle}>
            {getButtonText()}
          </button>
        </form>

        {/* Toggle between Modes */}
        <div style={{ textAlign: "center", marginTop: 16, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {mode === "login" ? (
            <button
              onClick={() => { setMode("forgot"); setMessage(""); setError(""); }}
              style={linkStyle}
            >
              {isAr ? "نسيت كلمة المرور؟" : "Forgot password?"}
            </button>
          ) : (
            <button
              onClick={() => { setMode("login"); setMessage(""); setError(""); }}
              style={linkStyle}
            >
              {isAr ? "العودة إلى تسجيل الدخول" : "Back to login"}
            </button>
          )}
        </div>

        {message && <p style={{ color: "green", marginTop: 16, fontSize: 14 }}>{message}</p>}
        {error && <p style={{ color: "red", marginTop: 16, fontSize: 14 }}>{error}</p>}
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
  border: "1px solid #ddd",
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
  marginTop: 4,
};

const linkStyle: React.CSSProperties = {
  background: "none",
  border: "none",
  color: "#7A1B1B",
  cursor: "pointer",
  fontSize: 14,
  textDecoration: "underline",
};
