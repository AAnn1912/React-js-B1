import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header";
import Banner from "./Component/Banner";
import Items from "./Component/Items";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Items />
      <Footer />
    </div>
  );
}

export default App;
