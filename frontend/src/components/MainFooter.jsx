function Footer(){
return(
<footer className="bg-dark text-light pt-5 pb-3">
  <div className="container">
    <div className="row">

      <div className="col-md-4 mb-4">
        <h5 className="fw-bold">Sunshine Laundrymat</h5>
        <p className="text">Reliable laundry services to keep your clothes fresh and clean. Fast pickup & delivery in your neighborhood.</p>
      </div>
      <div className="col-md-4 mb-4">
        <h5 className="fw-bold">Quick Links</h5>
        <ul className="list-unstyled">
          <li><a href="#services" className="text-light text-decoration-none">Services</a></li>
          <li><a href="#pricing" className="text-light text-decoration-none">Pricing</a></li>
          <li><a href="#hero" className="text-light text-decoration-none">Pickup</a></li>
        </ul>
      </div>

      <div className="col-md-4 mb-4">
        <h5 className="fw-bold">Contact Us</h5>
        <p className="mb-1">📍 123 Clean St, Quezon City</p>
        <p className="mb-1">📞 0917 555 8899</p>
        <p className="mb-1">✉️ hello@sunshinelaundries.com</p>
        <div className="mt-2">
          <a href="#" className="text-light me-2"><i className="bi bi-facebook fs-5"></i></a>
          <a href="#" className="text-light me-2"><i className="bi bi-instagram fs-5"></i></a>
          <a href="#" className="text-light"><i className="bi bi-twitter fs-5"></i></a>
        </div>
      </div>

    </div>
    <hr className="border-secondary"></hr>
    <div className="text-center">
      <small className="text-muted">© 2025 FreshSpin Laundry. All rights reserved.</small>
    </div>
  </div>
</footer>
)
}
export default Footer