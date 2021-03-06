import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from 'pages/listing';
import Form from 'pages/form';
import Navbar from "components/Navbar";
import Footer from "components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":destinoId" element={<Form />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;