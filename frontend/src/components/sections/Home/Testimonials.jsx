export default function Testimonials(){
return(
<section id="testimonials" className="py-5">
  <div className="container">
    <h2 className="fw-bold text-center mb-5">What Our Customers Say</h2>

    <div className="row g-4">

      <div className="col-md-6 col-lg-4">
        <div className="card h-100 border-0 shadow-sm p-3 text-center bg-white">
          <img src="https://via.placeholder.com/80" className="rounded-circle mx-auto mb-3" alt="Customer 1"/>
          <h5 className="fw-bold">Maria Santos</h5>
          <p className="text-muted fst-italic">"Super fast and affordable! Highly recommended."</p>
          <div className="text-warning">
            ★★★★☆
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4">
        <div className="card h-100 border-0 shadow-sm p-3 text-center bg-white">
          <img src="https://via.placeholder.com/80" className="rounded-circle mx-auto mb-3" alt="Customer 2"/>
          <h5 className="fw-bold">John Dela Cruz</h5>
          <p className="text-muted fst-italic">"Pickup service saved my day! Excellent customer service."</p>
          <div className="text-warning">
            ★★★★★
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4">
        <div className="card h-100 border-0 shadow-sm p-3 text-center bg-white">
          <img src="https://via.placeholder.com/80" className="rounded-circle mx-auto mb-3" alt="Customer 3"/>
          <h5 className="fw-bold">Anna Reyes</h5>
          <p className="text-muted fst-italic">"The ironing service is flawless and my clothes always look perfect."</p>
          <div className="text-warning">
            ★★★★☆
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


)
}