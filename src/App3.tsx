import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}
function App3() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    // get -> promise -> res / err
    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      }) // wrong url
      .then((Response) => {
        setUsers(Response.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      }); // This is a promise

    return () => controller.abort();
  }, []);

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Arman" };
    setUsers([newUser, ...users]);

    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const deleteUser = (user: User) => {
    // inja yano ma qablan chon user ro tarif kardim faqat : ham qarar midim
    setUsers(users.filter((u) => u.id !== user.id));
    const originalUsers = [...users];
    axios
      .delete("https://jsonplaceholder.typicode.com/users" + user)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>} /* in yani faqat zamani
      k error dashtim ino neshon bede */
      {loading && <div className="spinner-border"></div>} /* yani zamani k
      loading true bashe faqat neshon bede */
      <br />
      <br />
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App3;
