import { batches } from "../data/data";

export default function Batches() {
  return (
    <div>
      <h2>Batches</h2>
      <table className="table">
        <thead><tr><th>Batch</th><th>Course</th><th>Students</th><th>Timing</th><th>Trainer</th></tr></thead>
        <tbody>
          {batches.map(b => (
            <tr key={b.id}>
              <td>{b.code}</td>
              <td>{b.course}</td>
              <td>{b.students}</td>
              <td>{b.timing}</td>
              <td>{b.trainer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
