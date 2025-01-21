import './App.css';
// import { ways } from './data/data.js';
import { CardTask } from './components/CardTask/CardTask.jsx';

function App() {
  // const listWays = ways.map(way => 
  //   <li>{<WayToTeach title={way.title} description={way.description}/>}</li>
  // )
  return (
    <div className="App">
      <CardTask />

    </div>
  );
}

export default App;
