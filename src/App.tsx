import {
  BrowserRouter as Router,
  Route,
  Routes as RoutingTable,
} from "react-router-dom";
import ProtectedRoute from "./store/ProtectedRoute";
import Navbar from "@/components/Reusables/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import Footer from "@/components/Reusables/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <RoutingTable>
        {/* Authenticated Routes / Private Routes */}
        <Route path="/home" index element={<HomePage />} />
        <Route path="/profile/:userId" index element={<ProfilePage />} />

        {/* Public Routes */}
        <Route path="/" index element={<LandingPage />} />

        {/* Select All */}
        <Route path="*" index element={<LandingPage />} />
      </RoutingTable>
      <Footer />
    </Router>
  );
}

export default App;
