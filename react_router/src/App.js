import { Redirect, Route, Switch } from "react-router-dom";

import Welcome from "./pages/Welcome";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome'/>
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
