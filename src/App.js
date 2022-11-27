import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherDetails from "./Components/WeatherDetails";
import { getWeather } from './JS/action/action';
import WeatherCard from './Components/WeatherCard';

function App() {
  const weather = useSelector(state => state.weather)
  const loading = useSelector(state => state.loading)

  const [query, setQuere] = useState("London")
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getWeather(query))
    return () => {
    };
  },[query])
  
  return (
    
    <div className="App">
      <Routes>
        <Route path='/'  element={loading? <h1>Loading</h1> : weather? <WeatherCard /> : null } />
        <Route path='/:date' element={weather ? <WeatherDetails /> : <h1>Loading</h1> } />
      </Routes>  
    </div>
  );
}

export default App;
