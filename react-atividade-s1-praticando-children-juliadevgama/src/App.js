import './App.css';
import '../src/components/styles.css'
import CenteredCard from './components/CenteredCard';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CenteredCard 
        children1={1}
        children2={2}
        children3={3}/>
      </header>
    </div>
  );
}

export default App;
