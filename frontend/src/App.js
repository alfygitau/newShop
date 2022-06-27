import Footer from "./components/Footer";
import Header from "./components/Header";

// external modules
import { Container } from "react-bootstrap";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Homepage />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
