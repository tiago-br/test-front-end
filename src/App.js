import './App.css';
import GlobalStyle from './components/GlobalStyles';
import Interacao1A from './components/Interacao1A';
import Interacao1B from './components/Interacao1B';

function App() {
  return (
    <>
    <GlobalStyle/>
    <div className="App">
      <h1>Interações</h1>
      <Interacao1A />
      <Interacao1B />
    </div>
    </>
  );
}

export default App;
