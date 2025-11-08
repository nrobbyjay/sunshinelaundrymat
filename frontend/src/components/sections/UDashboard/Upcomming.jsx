export default function Upcomming(){
    return(
    <section className="bg-blue-100 p-4 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Upcoming Bookings</h2>
      <ul>
        {bookings.map(b => (
          <li key={b.id} className="mb-2 border-b pb-2">
            {b.service} - {b.date} at {b.time}
          </li>
        ))}
      </ul>
    </section>
    )
}