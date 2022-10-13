import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project";

const App = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const removeTour = (id) => {
    const newTours = data.filter((tour) => {
      return tour.id !== id;
    });
    setData(newTours);
  };

  const getData = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();

      setLoading(false);
      setData(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (data.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn"
            onClick={getData}
          >Refresh</button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={data} removeTour={removeTour} />
    </main>
  );
};

export default App;
