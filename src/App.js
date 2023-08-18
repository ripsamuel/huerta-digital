import './App.css';
import PlantForm from './components/plantForm';
import SimpleBottomNavigation from './components/navbar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className='App-body'>
        <PlantForm/>
        <SimpleBottomNavigation/>
      </div>
    </div>
    
  );
}

export default App;
