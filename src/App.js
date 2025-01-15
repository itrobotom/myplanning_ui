import './App.css';
import { ways } from './data/data.js';
import { WayToTeach } from './components/WayToTeach/WayToTeach';

function App() {
  const listWays = ways.map(way => 
    <li>{<WayToTeach title={way.title} description={way.description}/>}</li>
  )
  return (
    <div className="App">
      <header className="App-header">
        <p>Привет, будущий программист! Посмотрим, что тебея ждет в этом учебном году!</p>
      </header>
      <WayToTeach title={ways[0].title} description={ways[0].description}/>
      <WayToTeach title={ways[1].title} description={ways[1].description}/>
      <ul>
        {listWays}
      </ul>

    </div>
  );
}

export default App;
