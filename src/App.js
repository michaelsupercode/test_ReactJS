import './App.css';
import Footer from './Components/footer';
import Header from './Components/header';
import TrainerSection from './Components/trainerSection';

// die import bezeichnung ist frei wählbar, der pfad zur importierender datei muss absolute sein

function App() {
  return (
    <div className="App">
      <Header />
      <TrainerSection />
      <Footer />
    </div>
  );
}

export default App;
