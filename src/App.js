import logo from './logo.svg';
import './App.css';

const button =()=>{
  var output=[];
    for(let i=0;i<4;++i)
        output.push(<button>我是第{i}個按鍵</button>)
    return output;
}

/*
* 213123
* */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>It is {new Date().toLocaleTimeString()}.</p>
        <br />
        <p>
          Edit <code>src/App.js</code> and save to reload 12345125.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        { button() }
      </header>
    </div>
  );
}

export default App;
