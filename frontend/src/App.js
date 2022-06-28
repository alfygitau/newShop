import Footer from "./components/Footer";
import Header from "./components/Header";

// external modules
import { Container } from "react-bootstrap";
import Homepage from "./pages/Homepage";

// router
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="" element={<Homepage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart/" element={<Cart />} >
              <Route path="" element={<Cart/>} />
              <Route path=":id" element={<Cart/>} />
            </Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
