import logo from './logo.svg';
import './App.css';
import Clock from './Clock'; 

function App() {
  return (
    <div >
      
        <Clock continent='Africa' city='Nairobi' dynamic ={false} /> <hr />
        <Clock continent='Europe' city='Paris' dynamic ={true} /> <hr />
      
    </div>
  );
}

export default App;
