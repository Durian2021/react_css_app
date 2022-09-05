// import logo from './logo.svg';
import './App.css';

function App() {

  setTimeout(() => {
    this.setState({isOpen: false} )
  },3000)
  return (
    <div className="App">
      <p class="lead">5-3-3 左から右に線が伸びる（下部）</p>
      <ul class="gnavi"
        style={{
          transition: '1s',
          opacity: isOpen ? 1 : 0,
          width: isOpen  ? '60vw' : '10vw',
        }}
      >
        <li class="current"><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  );
}

export default App;
