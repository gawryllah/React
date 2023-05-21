import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function updateRevList(list){
 
  return [...list].reverse()
}

function App() {
  const xd = [
    {text: "aaa", id: 1, color: "red"},
    {text: "bbb", id: 2, color: "blue"},
    {text: "ccc", id: 3, color:"green"}
            ] 
  const [testVals, setTestVals] = useState(xd);
  const [toggle, setToggle] = useState(false)
  
    const btn = <button onClick={() => alert("test msg")}>Click</button>
    const toggleBtn = <button onClick={() => setToggle(!toggle)}>Wlacz/Wylacz</button>
    const revListBtn = <button onClick={() => {setTestVals(updateRevList(testVals))}}>Reverse List</button>

  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <body>
          {toggleBtn}
          {toggle ? "On" : "Off"}
          {toggle && (
          <div>
          <ul>
            {testVals.map(x => (<li key={x.id} style={{color: x.style}}>{x.text}</li> ))}
          </ul>
          {btn}
          {revListBtn}
          </div>
          )}
        </body>
      </header>
    </div>
    </>
  );
}

export default App;
