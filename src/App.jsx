import Navbar from './components/navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import FloatingSocials from './components/FloatingSocials'; // ✅ Import is correct

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Footer />
      <FloatingSocials /> 
    </>
  );
}

export default App;
