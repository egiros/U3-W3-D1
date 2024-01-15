import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainSearch />} />
          <Route path="/:company" element={<CompanySearchResults />} />
        </Routes>
      </BrowserRouter>
      {/* <h2>
        Cart:{" "}
        {cart.cart ? (
          <div>
            <p>Name: {cart.cart.name}</p>
            <p>Qt: {cart.cart.qt}</p>
          </div>
        ) : (
          "No cart set"
        )}
      </h2>
      <button onClick={() => dispatch(setCart({ name: "Mouse", qt: 1 }))}>Set Cart</button>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button> */}
    </Container>
  );
}

export default App;
