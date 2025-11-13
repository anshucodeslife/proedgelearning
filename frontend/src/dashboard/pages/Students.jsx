import { students } from "../data/data";

export default function Students() {
  return (
    <div>
      <h2>Students</h2>
      <table className="table">
        <thead><tr><th>Name</th><th>Course</th><th>Batch</th><th>Status</th><th>Fees</th></tr></thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.course}</td>
              <td>{s.batch}</td>
              <td>{s.status}</td>
              <td>{s.feesPaid}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
