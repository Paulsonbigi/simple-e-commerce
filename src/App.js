import React from "react"
import Header from "./components/partials/Header"
import ProductListing from "./components/landing-page/productListing";
import ProductDetails from "./components/landing-page/productDetails";
import ProductComponent from "./components/landing-page/productComponent";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
function App() {
  return (
    <div className="relative w-full">
      <Router>
        <Header/>
        <Route path="/" exact component={ProductListing} />
        <Route path="/product/:productID" exact component={ProductDetails} />
        {/* <Route>404 Not Found!</Route> */}
      </Router>
    </div>
  );
}

export default App;
