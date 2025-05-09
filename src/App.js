import React, { useEffect, useState } from 'react';
import './App.css';
// import { ways } from './data/data.js';
import { CardTask } from './components/CardTask/CardTask.jsx';
import { ListTaskPage } from './pages/ListTasksPage/ListTasksPage.jsx';

function App() {
  // const listWays = ways.map(way => 
  //   <li>{<WayToTeach title={way.title} description={way.description}/>}</li>
  // )
  const maxWidthForMobile = 1221; //у топовых смартфонов ширина экрана 1220 px, у простеньких 720, 
  // то есть масштабирование шрифта и отступов можно сдлеть для болшьше 769 и меньше 1221 и меньше 769
  
  const [isMobile, setIsMobile] = useState(true); 

  const checkMobileDevice = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setIsMobile(width < maxWidthForMobile && height > width); 
  }

  useEffect(() => checkMobileDevice);
  if (!isMobile) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Приложение рассчитано для мобильных устройств</h1>
        <p>Пожалуйста, откройте приложение через мобильный телефон.</p>
      </div>
    );
  }
  return (
    <div className="App">
      <ListTaskPage />

    </div>
  );
}

export default App;
