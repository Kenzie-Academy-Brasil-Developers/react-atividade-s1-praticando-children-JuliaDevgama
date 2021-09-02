import './App.css';
import '../src/components/styles.css'
import CenteredCard from './components/CenteredCard';
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <CenteredCard>
            <h3>Children 1</h3>
          </CenteredCard>

          <CenteredCard>
            <h3>Children 2</h3>
          </CenteredCard>

          <CenteredCard>
            <h3>Children 3</h3>
          </CenteredCard>
      </header>
    </div>
  );
}

export default App;
