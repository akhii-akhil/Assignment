import logo from './logo.svg';
import './App.css';
import LineChart from './Components/LineChart';
import Tabl from './Components/Tabl';
import TabCont from './Components/TabCont';
function App() {
  return (
    <div className="App">
      <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>
      <TabCont />

    </div>
  );
}

export default App;
