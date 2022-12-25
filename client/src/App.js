import { Footer } from './components/Footer.jsx';
import Header from './components/Header.jsx';
import { Main } from './pages/Main.jsx'

function App() {
  return (
    <div>
      <Header/>
      <div>
        <Main/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
