import { useLocation } from "react-router-dom";

export default function SuccessPage() {
  const location = useLocation();
  const user = location.state?.firstName || "müşterimiz";

  return (
    <div className="container" style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1 style={{ fontSize: "3rem", color: "#28a745" }}>🎉 Teşekkürler {user}!</h1>
      <p style={{ fontSize: "1.3rem", marginTop: "1.5rem" }}>
        Siparişin alındı. Yoldayız 🚚💨
      </p>
    </div>
  );
}
