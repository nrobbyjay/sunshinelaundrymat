export default function OffCanvasSidebar(){
return(
<div className="offcanvas offcanvas-end" tabIndex="-1" id="profileSidebar" aria-labelledby="profileSidebarLabel">
  <div className="offcanvas-header border-bottom">
    <h5 id="profileSidebarLabel" className="fw-bold text-primary mb-0">Your Profile</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">

    <div className="text-center mb-4">
      <img src="https://via.placeholder.com/100" className="rounded-circle mb-3 shadow-sm" alt="User Avatar"/>
      <h6 className="fw-bold mb-0">John Dela Cruz</h6>
      <p className="text-muted small mb-0">Member since 2024</p>
    </div>

    <div className="card border-0 shadow-sm mb-4">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h6 className="fw-bold mb-0">Available Credits</h6>
          <h4 className="fw-bold text-primary mb-0">₱480.00</h4>
        </div>
        <i className="bi bi-wallet2 fs-3 text-primary"></i>
      </div>
    </div>

    <h6 className="text-muted text-uppercase small mb-2">Quick Actions</h6>
    <div className="list-group mb-4">
      <a href="#" className="list-group-item list-group-item-action">
        <i className="bi bi-cart-check me-2 text-primary"></i> Book Pickup
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        <i className="bi bi-clock-history me-2 text-primary"></i> View Bookings
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        <i className="bi bi-person-lines-fill me-2 text-primary"></i> Edit Profile
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        <i className="bi bi-box-arrow-right me-2 text-danger"></i> Logout
      </a>
    </div>

    <div className="text-center">
      <p className="text-muted small mb-1">Need help?</p>
      <a href="#" className="btn btn-outline-primary btn-sm">Contact Support</a>
    </div>
  </div>
</div>
)
}