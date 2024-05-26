import './App.css'
import WeatherApp from './WeatherApp'


function App() {
  let IMG_URL = "https://media.istockphoto.com/id/464542668/photo/freezing.jpg?s=1024x1024&w=is&k=20&c=tqXZzwC0sa8_QU-o1HjQWFJ15-2WKlXZNa3IQgueTEY="
  return (
    <div style={{backgroundImage: `url(${IMG_URL})`, backgroundSize: 'cover', minHeight: '100vh', width: '100vw'}}>
    <WeatherApp/>
  </div>
  )
}

export default App
