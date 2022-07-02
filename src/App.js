import logo from './logo.svg';
import './App.css';
import Clock2 from './Clock2'; 

function App() {
  return (
    <div >
      
        <Clock2 continent='Africa' city='Nairobi' dynamic ={false} /> <hr />
        <Clock2 continent='Europe' city='Paris' dynamic ={true} /> <hr />
      
    </div>
  );
}

export default App;
