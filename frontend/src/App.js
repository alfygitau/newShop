import Footer from "./components/Footer";
import Header from "./components/Header";

// external modules
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to DeliverX shop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
