
import Catalog from "../../features/catalog/Catalog";
import { Container, CssBaseline } from "@mui/material"
import Header from "./Header";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <ToastContainer position='bottom-right' hideProgressBar theme='colored' />
      <CssBaseline />
      <Header />
      <Container>
        <Switch>
          <Route exact path={'/'} component={HomePage} />
          <Route exact path={'/catalog'} component={Catalog} />
          <Route path={'/catalog/:id'} component={ProductDetails} />
          <Route path={'/about'} component={AboutPage} />
          <Route path={'/contact'} component={ContactPage} />
        </Switch>
      </Container>

    </>
  );
}

export default App;
