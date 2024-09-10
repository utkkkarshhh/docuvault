import {
  BrowserRouter as Router,
  Route,
  Routes as RoutingTable,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import PageLayout from "./components/Reusables/PageLayout/PageLayout";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <RoutingTable>
        {/* Authenticated Routes / Private Routes */}
        <Route
          path="/home"
          index
          element={
            <PageLayout showHeader showFooter>
              <HomePage />
            </PageLayout>
          }
        />
        <Route
          path="/profile/:userId"
          index
          element={
            <PageLayout showHeader showFooter>
              <ProfilePage />
            </PageLayout>
          }
        />

        {/* Public Routes */}
        <Route
          path="/"
          index
          element={
            <PageLayout showHeader showFooter>
              <LandingPage />
            </PageLayout>
          }
        />

        <Route
          path="/login"
          index
          element={
            <PageLayout showFooter>
              <LoginPage />
            </PageLayout>
          }
        />

        {/* Select All */}
        <Route
          path="*"
          index
          element={
            <PageLayout showHeader showFooter>
              <LandingPage />
            </PageLayout>
          }
        />
      </RoutingTable>
    </Router>
  );
}

export default App;
