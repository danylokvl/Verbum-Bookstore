import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import HomePage from "./pages/HomePage";
import BooksPage from "./pages/BooksPage";
import AuthorsPage from "./pages/AuthorsPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

//fonts
import "./assets/fonts/mariupol/MARIUPOL-BOLD.OTF";
import "./assets/fonts/mariupol/MARIUPOL-MEDIUM.OTF";
import "./assets/fonts/mariupol/MARIUPOL-REGULAR.OTF";

import "./App.less";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/authors" element={<AuthorsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
