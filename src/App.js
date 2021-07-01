import BooksList from "./components/BooksList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './styles/global.css'

function App() {
  return (
    <div>
      <Header />
      <BooksList />
      <Footer />
    </div>
  );
}

export default App;
