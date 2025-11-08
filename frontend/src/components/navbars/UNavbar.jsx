export default function UNavbar(){
    return(
<nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
  <div className="container-fluid px-4">
    <a className="navbar-brand fw-bold text-primary" href="#">Sunshine Laundrymat</a>

    <div className="d-flex align-items-center ms-auto">
      <button className="btn btn-light position-relative me-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNotifications" aria-controls="offcanvasNotifications">
        <i className="bi bi-bell fs-5"></i>
        <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
          <span className="visually-hidden">New alerts</span>
        </span>
      </button>

      <button className="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#profileSidebar" aria-controls="profileSidebar">
        <i className="bi bi-person-circle fs-4 text-primary"></i>
      </button>
    </div>
  </div>
</nav>
    )
}