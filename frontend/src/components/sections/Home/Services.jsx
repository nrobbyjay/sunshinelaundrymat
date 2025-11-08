export default function Services(){
    return(
    <section id="services" className="py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Our Services</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Wash & Fold"/>
              <div className="card-body">
                <h5 className="card-title">Wash & Fold</h5>
                <p className="text-muted">Quick and clean wash with professional care.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Ironing"/>
              <div className="card-body">
                <h5 className="card-title">Ironing</h5>
                <p className="text-muted">Neatly pressed and ready-to-wear clothes.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Pickup & Delivery"/>
              <div className="card-body">
                <h5 className="card-title">Pickup & Delivery</h5>
                <p className="text-muted">Convenient doorstep pickup and return.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )

}