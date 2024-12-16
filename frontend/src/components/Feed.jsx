import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Feed.css";

const Feed = () => {
  const [pickles, setPickles] = useState([]);

  useEffect(() => {
    const fetchPickles = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/api/v1/pickles",
          { withCredentials: true }
        );
        setPickles(data.data);
      } catch (error) {
        console.error("Error fetching pickles:", error);
      }
    };

    fetchPickles();
  }, []);

  return (
    <main className="feed" id="feed">
      <h2>Our Pickles</h2>
      <div className="pickle-grid">
        {pickles.length > 0 ? (
          pickles.map((pickle, index) => (
            <div key={index} className="pickle-card">
              <img
                src={pickle.image}
                alt={pickle.name}
                className="pickle-image"
              />
              <h3>{pickle.name}</h3>
              <p>{pickle.description}</p>
              <p>
                <strong>Flavor:</strong> {pickle.flavor}
              </p>
            </div>
          ))
        ) : (
          <p>Loading pickles...</p>
        )}
      </div>
    </main>
  );
};

export default Feed;
