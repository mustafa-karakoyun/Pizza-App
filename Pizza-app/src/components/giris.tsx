
// import type { JSX } from "react";
// //import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // JS ve Popper
// export default function Giris(): JSX.Element {
//   return (
//     <div className="bg-light text-dark">
//       {/* Hero Banner + Carousel */}
//       <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img
//               src="assets/pizza-background.jpg"
//               className="d-block w-100"
//               alt="Pizza 1"
//               style={{ maxHeight: "500px", objectFit: "cover" }}
//             />
//             <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
//               <h1 className="fw-bold">Kral Pizza'ya Hoş Geldin </h1>
//               <p>Lezzetin adresi burası. Sıcak, hızlı ve enfes pizzalar.</p>
//               <a href="/pizza" className="btn btn-primary btn-lg mt-3">
//                 Menüye Git
//               </a>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img
//               src="assets/napoletana.jpeg"
//               className="d-block w-100"
//               alt="Pizza 2"
//               style={{ maxHeight: "500px", objectFit: "cover" }}
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               src="assets/cheese.jpg"
//               className="d-block w-100"
//               alt="Pizza 3"
//               style={{ maxHeight: "500px", objectFit: "cover" }}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Hakkımızda Bölümü */}
//       <div className="container my-5">
//         <div className="row align-items-center">
//           <div className="col-md-6">
//             <h2 className="fw-bold">🍕 Biz Kimiz?</h2>
//             <p className="lead">
//               Kral Pizza olarak sadece pizza yapmıyoruz, sana sıcak bir gülümseme de getiriyoruz. En kaliteli
//               malzemeler, özel tarifler ve kral gibi servis ile karşındayız.
//             </p>
//             <a href="/pizza" className="btn btn-outline-primary mt-3">
//               Lezzetlere Göz At
//             </a>
//           </div>
//           <div className="col-md-6">
//             <img
//               src="assets/delivery-banner.jpeg"
//               className="img-fluid rounded shadow"
//               alt="Pizzacı"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import type { JSX } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Giris(): JSX.Element {
  return (
    <div className="bg-light text-dark">
      {/* Hero Banner + Carousel */}
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <a href="/pizza">
              <img
                src="assets/pizza-background.jpg"
                className="d-block w-100"
                alt="Pizza 1"
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
            </a>
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
              <h1 className="fw-bold">Kral Pizza'ya Hoş Geldin</h1>
              <p>Lezzetin adresi burası. Sıcak, hızlı ve enfes pizzalar.</p>
              <a href="/pizza" className="btn btn-primary btn-lg mt-3">
                Menüye Git
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <a href="/pizza">
              <img
                src="assets/pizza.jpg"
                className="d-block w-100"
                alt="Pizza 3"
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
            </a>
            
          </div>

          <div className="carousel-item">
            <a href="/pizza">
              <img
                src="assets/pizza2.jpg"
                className="d-block w-100"
                alt="Pizza 2"
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
            </a>
          </div>

          
        </div>

        {/* İleri/Geri Tuşları */}
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Önceki</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Sonraki</span>
        </button>
      </div>

      {/* Hakkımızda Bölümü */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="fw-bold">🍕 Biz Kimiz?</h2>
            <p className="lead">
              Kral Pizza olarak sadece pizza yapmıyoruz, sana sıcak bir gülümseme de getiriyoruz. En kaliteli
              malzemeler, özel tarifler ve kral gibi servis ile karşındayız.
            </p>
            <a href="/pizza" className="btn btn-outline-primary mt-3">
              Lezzetlere Göz At
            </a>
          </div>
          <div className="col-md-6">
            <img
              src="assets/delivery-banner.jpeg"
              className="img-fluid rounded shadow"
              alt="Pizzacı"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
