export default function Pricing(){
    return(
<section id="pricing" className="py-5 bg-light">
  <div className="container text-center">
    <h2 className="fw-bold mb-4">Affordable Pricing</h2>
    <div className="row g-4">
      <div className="col-md-4">
        <div className="card border-0 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Basic</h5>
            <h3 className="fw-bold">₱80/load</h3>
            <p className="text-muted">Wash & Fold</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card border-primary border-2 shadow-sm">
          <div className="card-body">
            <h5 className="card-title text-primary">Premium</h5>
            <h3 className="fw-bold text-primary">₱120/load</h3>
            <p className="text-muted">Wash, Fold & Iron</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card border-0 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Pickup & Delivery</h5>
            <h3 className="fw-bold">₱50 extra</h3>
            <p className="text-muted">Within 3km radius</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}