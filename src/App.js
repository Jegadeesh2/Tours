import { useState,useEffect } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project"

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading,setIsLoading] = useState(false);

  //function

  const deleteTour = (id) => {
    const newTours = tours.filter((tour) =>tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () =>{
    setIsLoading(true);
    try{
    const res = await fetch(url);
    const tours = await res.json();
    setIsLoading(false)
    setTours(tours)
    }catch(error){
      setIsLoading(true);
      console.log(error)
    }
  } 

  useEffect(() => {
    fetchTours();
  }, [])

  if(isLoading){
    return (
      <main>
        <Loading/>
      </main>
    )
  }

    if(tours.length === 0){
      return  (
        <main>   
    <div className='title'>FAMOUS TOURS 🌍🚗🛩️🚢</div>
    <button type="button" className="refresh btn" onClick={() => fetchTours()}>See Packages</button>
    </main>)
    }
  return (
    <div className="App">
      <Tours tours={tours} deleteTour={deleteTour}/>
    </div>
  );
}

export default App;