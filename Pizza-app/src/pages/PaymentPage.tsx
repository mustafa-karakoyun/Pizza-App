import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "./payment.css";
import { useNavigate } from "react-router-dom";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  address: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
};

export default function PaymentPage() {
  const { color } = useContext(ThemeContext);

  const navigate = useNavigate();
    const handlePlaceOrder = () => {
        navigate("/success", {
        state: { firstName: "Müşterimiz" }, // You can pass more data if needed
        });
    };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    //alert("Sipariş alındı!");
  };

  const fillFakeCustomer = () => {
    setValue("firstName", "Ahmet");
    setValue("lastName", "Yılmaz");
    setValue("email", "ahmet@example.com");
    setValue("contact", "05554443322");
    setValue("address", "Ankara, Türkiye");
  };

  const fillTestCard = () => {
    setValue("cardNumber", "4242 4242 4242 4242");
    setValue("expiry", "12/29");
    setValue("cvc", "123");
  };

  return (
    <div className="container">
      <h1 className="checkout-title">CHECKOUT</h1>

      <form className="checkout-grid" onSubmit={handleSubmit(onSubmit)}>
        {/* Sol Sütun */}
        <section>
          <h2>Kişisel Bilgiler</h2>
          <button
            type="button"
            className="btn btn-fake-customer mb-3"
            onClick={fillFakeCustomer}
          >
            👤 Sahte Müşteri
          </button>

          <div className="form-row">
            <div className="form-group">
              <label>İsim *</label>
              <input
                type="text"
                {...register("firstName", { required: true })}
                placeholder="First name"
              />
              {errors.firstName && <span className="text-danger">Zorunlu</span>}
            </div>

            <div className="form-group">
              <label>Soyisim *</label>
              <input
                type="text"
                {...register("lastName", { required: true })}
                placeholder="Last name"
              />
              {errors.lastName && <span className="text-danger">Zorunlu</span>}
            </div>
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
            />
            {errors.email && <span className="text-danger">Zorunlu</span>}
          </div>

          <div className="form-group">
            <label>İletişim Numarası. *</label>
            <input
              type="tel"
              {...register("contact", { required: true })}
              placeholder="Contact No."
            />
            {errors.contact && <span className="text-danger">Zorunlu</span>}
          </div>

          <div className="form-group">
            <label>Address *</label>
            <input
              type="text"
              {...register("address", { required: true })}
              placeholder="Address"
            />
            {errors.address && <span className="text-danger">Zorunlu</span>}
          </div>
        </section>

        {/* Sağ Sütun */}
        <section>
          <h2>Ödeme</h2>
          <button
            type="button"
            className="btn btn-test-card mb-3"
            onClick={fillTestCard}
          >
            💳 Test kart kullan
          </button>

          <div className="payment-form">
            <div className="form-group">
              <label>Card number</label>
              <input
                id="card-number"
                type="text"
                {...register("cardNumber", { required: true })}
                placeholder="1234 1234 1234 1234"
              />
              {errors.cardNumber && <span className="text-danger">Zorunlu</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>SKT</label>
                <input
                  type="text"
                  {...register("expiry", { required: true })}
                  placeholder="MM/YY"
                />
                {errors.expiry && <span className="text-danger">Zorunlu</span>}
              </div>

              <div className="form-group">
                <label>CVC</label>
                <input
                  type="text"
                  {...register("cvc", { required: true })}
                  placeholder="CVC"
                />
                {errors.cvc && <span className="text-danger">Zorunlu</span>}
              </div>
            </div>
          </div>

          <button onClick={handlePlaceOrder}  type="submit" className={`btn btn-place-order btn-${color}`}>
            Siparişi Tamamla
          </button>
        </section>
      </form>
    </div>
  );
}