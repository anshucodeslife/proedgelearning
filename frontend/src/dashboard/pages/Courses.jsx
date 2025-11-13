import { courses } from "../data/data";

export default function Courses() {
  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map(c => (
          <li key={c.id}>{c.title} — {c.duration} — {c.price}</li>
        ))}
      </ul>
    </div>
  );
}
