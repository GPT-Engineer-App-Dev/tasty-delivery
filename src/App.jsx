import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Search from "./pages/Search.jsx"; // Import the new Search component
import OrderTracking from "./pages/OrderTracking.jsx"; // Import the new OrderTracking component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/search" element={<Search />} /> {/* Add the new route for search */}
      <Route path="/order-tracking" element={<OrderTracking />} /> {/* Add the new route for order tracking */}
      </Routes>
    </Router>
  );
}

export default App;
