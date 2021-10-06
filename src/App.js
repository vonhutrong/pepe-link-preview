import './App.css';
import MemeGrid from './component/grid/MemeGrid';
import getBootStrapData from './service/MemeService';

function App() {
  return (
    <div className="App">
      <MemeGrid memes = {getBootStrapData()} />
    </div>
  );
}

export default App;
