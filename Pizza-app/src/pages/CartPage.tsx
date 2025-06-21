
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link, useNavigate } from "react-router-dom";
//import CartItem from "../components/CartItem";
import "./cart.css";

export default function Cart() {
  const { items, addItem, deleteItem } = useContext(CartContext);
  const { mode, color } = useContext(ThemeContext);

  const navigate = useNavigate();
  const handleChechkout = () => {
    navigate("/payment");
  };

  const totalPrice = items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const deliveryFee = totalPrice >= 300 ? 0 : 50;
  const finalPrice = totalPrice + deliveryFee;

  return (
    <div className={`container py-5 text-${mode === "light" ? "dark" : "white"}`}>
      <h1
        className="sepet-title"
      >
        SEPETİNİZ
      </h1>

      <Link to="/" className="btn btn-teal mb-4">
        👈 Menüye Dön
      </Link>

      {items.length === 0 ? (
        <div className="alert alert-warning">Sepetiniz boş.</div>
      ) : (
        <>
          {items.map((item) => (
            <div className="card mb-4 cart-card" key={item.id}>
              <div className="row g-0">
                <div className="col-md-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid cart-image"
                  />
                </div>
                <div className="col-md-9 d-flex align-items-center">
                  <div className="cart-body">
                    <h5 className="cart-title">{item.title}</h5>
                    <p className="text-muted fs-5 mb-2">{item.price.toFixed(2)} ₺</p>
                    <div className="d-flex align-items-center gap-3">
                      <button
                        className="quantity-btn bg-danger text-white"
                        onClick={() => deleteItem(item.id)}
                      >
                        −
                      </button>
                      <span className="fs-5 fw-bold">Adet: {item.quantity}</span>
                      <button
                        className="quantity-btn bg-success text-white"
                        onClick={() => addItem(item)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* BURAYA EKLENİYOR */}
          <div className="mt-5 p-4 bg-light rounded text-end shadow-sm">
            <p className="fs-5 mb-1">
              Sipariş: <b>{totalPrice.toFixed(2)} ₺</b>
            </p>
            <p className="fs-5 mb-1">
              Kargo ({totalPrice >= 300 ? "Ücretsiz" : "300 ₺ altı"}):{" "}
              <b>{deliveryFee} ₺</b>
            </p>
            <h4 className="fw-bold text-primary">Toplam: {finalPrice.toFixed(2)} ₺</h4>
            {/* <Link to="/payment" className={`btn btn-${color} mt-3 px-4 py-2 fw-semibold`}>
              Ödemeye Geç
            </Link> */}
            <button
              className={`btn btn-${color} mt-3 px-4 py-2 fw-semibold`}
              onClick={handleChechkout}
            >
              Ödemeye Geç 
            </button>
          </div>
        </>
      )}
    </div>
  );
}






// import { useContext } from "react";
// import { CartContext } from "../contexts/CartContext";

// export default function CartPage() {
//   const { items } = useContext(CartContext);

//   return (
//     <div>
//       <h1>Sepetim</h1>
//       {items.length === 0 && <p>Sepet boş.</p>}
//       {items.map((item) => (
//         <div key={item.id}>
//           <p>{item.title} - Adet: {item.quantity}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// import { useContext, type JSX } from "react";
// import { CartContext } from "../contexts/CartContext";
// import { ThemeContext } from "../contexts/ThemeContext";

// export default function CartPage(): JSX.Element {
//   const { items } = useContext(CartContext);
//   const { color, mode } = useContext(ThemeContext);

//   const totalPrice = items.reduce((total, item) => {
//     return total + item.price * item.quantity;
//   }, 0);

//   return (
//     <div className="container py-5">
//       <h2 className={`mb-4 text-${mode === "light" ? "dark" : "light"}`}>
//         Sepetim
//       </h2>

//       {items.length === 0 ? (
//         <div className="alert alert-warning">Sepetiniz boş.</div>
//       ) : (
//         <div className="table-responsive">
//           <table className="table table-hover align-middle table-bordered">
//             <thead className={`table-${color}`}>
//               <tr>
//                 <th>#</th>
//                 <th>Ürün</th>
//                 <th>Adet</th>
//                 <th>Birim Fiyat</th>
//                 <th>Toplam</th>
//               </tr>
//             </thead>
//             <tbody>
//               {items.map((item, i) => (
//                 <tr key={item.id}>
//                   <td>{i + 1}</td>
//                   <td>{item.title}</td>
//                   <td>{item.quantity}</td>
//                   <td>{item.price} ₺</td>
//                   <td>{item.quantity * item.price} ₺</td>
//                 </tr>
//               ))}
//               <tr className="fw-bold">
//                 <td colSpan={4} className="text-end">
//                   Toplam Tutar:
//                 </td>
//                 <td>{totalPrice} ₺</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// import { useContext } from "react";
// import { CartContext } from "../contexts/CartContext";
// import { ThemeContext } from "../contexts/ThemeContext";
// import { Link } from "react-router-dom";

// export default function Cart() {
//   const { items } = useContext(CartContext);
//   const { mode, color } = useContext(ThemeContext);

//   const totalPrice = items.reduce(
//     (total, item) => total + item.quantity * item.price,
//     0
//   );

//   const deliveryFee = totalPrice >= 300 ? 0 : 50;
//   const finalPrice = totalPrice + deliveryFee;

//   return (
//     <div className={`container py-5 text-${mode === "light" ? "dark" : "white"}`}>
//       <h1 className="text-center mb-5 fw-bold text-danger" style={{ fontFamily: "cursive" }}>
//         SEPETİNİZ
//       </h1>

//       <Link to="/" className="btn btn-teal mb-4">
//         👈 Menüye Dön
//       </Link>

//       {items.length === 0 ? (
//         <div className="alert alert-warning">Sepetiniz boş.</div>
//       ) : (
//         <>
//           {items.map((item, index) => (
//             <div className="card mb-4 shadow-sm" key={index}>
//               <div className="row g-0">
//                 <div className="col-md-3">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="img-fluid rounded-start"
//                   /> 
//                   {/* <img
//                     src={`http://localhost:3000/images/${item.image}`}
//                     alt={item.title}
//                     className="img-fluid rounded-start"
//                     /> */}

//                 </div>
//                 <div className="col-md-9 d-flex align-items-center">
//                   <div className="card-body">
//                     <h5 className="card-title fw-bold">{item.title}</h5>
//                     <p className="card-text fs-5">{item.price} ₺</p>
//                     <div className="d-flex align-items-center gap-2">
//                       <button className="btn btn-outline-danger btn-sm">-</button>
//                       <span>Adet: {item.quantity}</span>
//                       <button className="btn btn-outline-success btn-sm">+</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}

//           <div className="mt-5 text-end">
//             <p className="fs-5">Sipariş: <b>{totalPrice.toFixed(2)} ₺</b></p>
//             <p className="fs-5">Kargo ({totalPrice >= 300 ? "Ücretsiz" : "300 ₺ altı"}): <b>{deliveryFee} ₺</b></p>
//             <h4 className="fw-bold">Toplam: {finalPrice.toFixed(2)} ₺</h4>
//             <Link to="/payment" className={`btn btn-${color} mt-3`}>
//               Ödemeye Geç
//             </Link>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

