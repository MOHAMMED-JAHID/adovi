import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Products from "./Components/Products";
// import Welcome from "./Welcome";
// import Fcomponent from "./Fcomponent";

function Home() {
  return (
    <div>
      <h2>Welcome to the Landing Page</h2>
      <p>
        Click <Link to="/section">here</Link> to navigate to the section.
      </p>
    </div>
  );
}
function App() {
  // const name = " Mohammed Jahid";
  // const var1 = <h1>WELCOME TO REACT</h1>;
  return (
    // <>
    //   {var1}
    //   {name}
    //   {<Banner />}
    //   {<Products />}
    //   {<Footer />}
    // </>

    <>
      {/* {<Welcome />} */}
      <div>
        <nav>
          <ul>
            <Link to="/Banner">Banner</Link>

            <Link to="/Footer">Footer</Link>

            <Link to="/Products">Products</Link>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Banner" element={<Banner />}></Route>
        <Route path="/Footer" element={<Footer />}></Route>
        <Route path="/Products" element={<Products />}></Route>
      </Routes>
      {/* <Fcomponent name="MOHAMMED JAHID" />
      <Fcomponent name="Shanthanu" />
      <Fcomponent name="Raj" /> */}
    </>
  );
}

export default App;
