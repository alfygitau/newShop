import Footer from "./components/Footer";
import Header from "./components/Header";

// external modules
import { Container } from "react-bootstrap";
import Homepage from "./pages/Homepage";

// router
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
import PlaceOrder from "./pages/PlaceOrder";
import Order from "./pages/Order";
import UserList from "./pages/UserList";
import UserEdit from "./pages/UserEdit";
import ProductList from "./pages/ProductList";
import ProductEdit from "./pages/ProductEdit";
import OrderList from "./pages/OrderList";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="" element={<Homepage />} />
            <Route path="/search/:keyword" element={<Homepage />} />
            <Route path="/page/:pageNumber" element={<Homepage />} />
            <Route
              path="/search/:keyword/page/:pageNumber"
              element={<Homepage />}
            />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart/" element={<Cart />}>
              <Route path="" element={<Cart />} />
              <Route path=":id" element={<Cart />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login/shipping" element={<Shipping />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/placeorder" element={<PlaceOrder />} />
            <Route path="/order/:id" element={<Order />} />
            <Route path="/admin/userlist" element={<UserList />} />
            <Route path="/admin/user/:id/edit" element={<UserEdit />} />
            <Route path="/admin/productlist" element={<ProductList />} />
            <Route
              path="/admin/productlist/:pageNumber"
              element={<ProductList />}
            />
            <Route path="/admin/orderlist" element={<OrderList />} />
            <Route path="/admin/product/:id/edit" element={<ProductEdit />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
