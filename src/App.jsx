import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Search from "./pages/Search.jsx"; // Import the new Search component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/search" element={<Search />} /> {/* Add the new route for search */}
      </Routes>
    </Router>
  );
}

export default App;
