export default function OffCanvasNotification(){
return (
<div className="offcanvas offcanvas-end border-0 shadow" tabIndex="-1" id="offcanvasNotifications" aria-labelledby="offcanvasNotificationsLabel">
  <div className="offcanvas-header bg-primary text-white">
    <h5 className="offcanvas-title" id="offcanvasNotificationsLabel">
      Notifications
    </h5>
    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body p-0">
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <div className="d-flex">
          <i className="bi bi-basket-fill text-primary fs-4 me-3"></i>
          <div>
            <strong>Your laundry pickup is confirmed</strong>
            <p className="mb-0 text-muted small">Today, 2:30 PM</p>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="d-flex">
          <i className="bi bi-droplet-half text-success fs-4 me-3"></i>
          <div>
            <strong>Your laundry is now being washed</strong>
            <p className="mb-0 text-muted small">30 mins ago</p>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="d-flex">
          <i className="bi bi-truck text-warning fs-4 me-3"></i>
          <div>
            <strong>Delivery on the way</strong>
            <p className="mb-0 text-muted small">5 mins ago</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div className="offcanvas-footer p-3 text-center border-top">
    <a href="#" className="btn btn-outline-primary w-100">View All</a>
  </div>
</div>

)
}