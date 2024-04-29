import "./App.css";
import useFetch from "./useFetch";


export default function App() {
const { data, loading, error } = useFetch(
  "https://jsonplaceholder.typicode.com/posts",
);
console.log(data)
  return (
    <main className="container mt-3">
      <h1>Post</h1>
      {loading && <p>Loading...</p>}
      {error && <p>An error occured while making a fetch request.</p>}
      {
        data && data.length > 0 ? (
          data.map((item)=>(
            <div className="mb-3">
              <ul className="list-group">
                <li className="list-group-item">
                  <h3>{item.title}</h3>
                  <p>{item.body }</p>
                </li>
              </ul>
            </div>
          ))
        )
        : (
          <p>No Data found.</p>
        )
      }
    </main>
  );
}
