import './App.css';
import "./Components/FirstPage/FirstPage.jsx"
import FirstPage from './Components/FirstPage/FirstPage.jsx';
//import "./Components/SecondPage/SecondPage.jsx'"
import { BrowserRouter as Router, Switch , Routes, Route } from "react-router-dom";
import SecondPage from './Components/SecondPage/SecondPage.jsx';

function App() {
  return (

    <Routes>
      

        
        <Route path="/" element={<FirstPage />}/>

    </Routes>



  );
}

export default App;
