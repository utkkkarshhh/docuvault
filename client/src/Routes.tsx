import {
  BrowserRouter as Router,
  Route,
  Routes as RoutingTable,
} from "react-router-dom";
import Home from "./pages/Home";

export default function Routes() {
  return (
    <Router>
      <RoutingTable>
        <Route path="/" index element={<Home />} />
      </RoutingTable>
    </Router>
  );
}
