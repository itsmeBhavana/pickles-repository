import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [pickles, setPickles] = useState([]);
  useEffect(() => {
    const fetchPickles = async () => {
      const { data } = await axios.get("http://localhost:3000/api/v1/pickles", {
        withCredentials: true,
      });
      setPickles(data.data);
    };
    fetchPickles();
  }, []);
  if (!pickles) return;
  return (
    pickles && (
      <>
        <h1>Pickle Store</h1>
        {pickles.map((pickle) => (
          <h1>{pickle.name}</h1>
        ))}
      </>
    )
  );
}

export default App;
