export default function Hero(){
    return(
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-md-start text-center">
            <h1 className="display-5 fw-bold">We Keep Your Clothes Fresh & Clean</h1>
            <p className="lead text-muted">Reliable laundry service with same-day pickup and delivery. Affordable & fast!</p>
            <a href="#contact" className="btn btn-primary btn-lg mt-3">Schedule Pickup</a>
          </div>
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img src="https://via.placeholder.com/500x350" alt="Laundry Service" className="img-fluid rounded-4 shadow-sm"/>
          </div>
        </div>
      </div>
    </section>
    )
}