

import './App.css';
import Weather from './components/Weather';

function App() {

  // const response=async ()=>{
  //   const response= await axios.get("http://api.openweathermap.org/data/2.5/weather?q=kolkata&units=metric&APPID=7641cb5bd4549e9bdf220408a9c417ba");
  //   console.log(response.data.main);
  // }
  return (
    <div className="App">
      <Weather/>
      {/* <button onClick={response}>Click Me</button> */}
    </div>
  );
}

export default App;
