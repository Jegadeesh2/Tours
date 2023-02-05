import { useState,useEffect } from "react";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project"

function App() {
  const [tours, setTours] = useState([]);

  //function

  const fetchTours = async () =>{
    const res = await fetch(url);
    const tours = await res.json();
    setTours(tours)
  }
  
  const deleteTour = (id) => {
    const newTours = tours.filter((tour) =>tour.id !== id);
    setTours(newTours)
  } 

  useEffect(() => {
    fetchTours();
  }, [])
  return (
    <div className="App">
      <Tours tours={tours} deleteTour={deleteTour}/>
    </div>
  );
}

export default App;