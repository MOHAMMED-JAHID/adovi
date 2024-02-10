// // import logo from "./logo.svg";
// // import { Link, Routes, Route } from "react-router-dom";
// import "./App.css";
// // import Componentd from "./Component/Componentd";

// // import Footer from "./Component/Footer";
// // import Header from "./Component/Header";
// // import Section from "./Component/Section";
// // // import Getgreeting from "./Getgreeting";
// // import Home from "./Home";

// function App() {
//   return (
//     <div className="App">
//       {/* //   <header className="App-header">
//     //     <nav style={{ border: "2px" }}>
//     //       <ul>
//     //         <Link to="/Header">Header</Link>
//     //         <Link to="/Section">Section</Link>
//     //         <Link to="/Footer">Footer</Link>
//     //       </ul>
//     //     </nav>
//     //   </header>
//     //   <Routes>
//     //     <Route path="/Header" element={<Header />}></Route>
//     //     <Route path="/Section" element={<Section />}></Route>
//     //     <Route path="/Footer" element={<Footer />}></Route>
//     //   </Routes> */}
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import Categories from "./Menu/Categories";
// import items from "./Menu/Data";
// import Menu from "./Menu/Menu";

// const allCategories = ["all", ...new Set(items.map((item) => item.category))];

// function App() {
//   const [menuItems, setMenuItems] = useState(items);
//   const [categories, setCategories] = useState(allCategories);

//   const filterItems = (category) => {
//     if (category === "all") {
//       setMenuItems(items);
//       return;
//     }
//     const newItems = items.filter((item) => item.category === category);
//     setMenuItems(newItems);
//   };

//   return (
//     <main>
//       <section className="menu section">
//         <div className="title">
//           <h2>our menu</h2>
//           <div className="underline"></div>
//         </div>
//         <Categories categories={categories} filterItems={filterItems} />
//         <Menu items={menuItems} />
//       </section>
//     </main>
//   );
// }

// export default App;

// import React from "react";
// import { Provider } from "react-redux";
// import Counter from "./Redux/CounterwRandom/Counter";
// import store from "./Redux/CounterwRandom/Store";
// import RandomAdder from "./Redux/CounterwRandom/Randomadder";

// function App() {
//   return (
//     <Provider store={store}>
//       <div className="App">
//         <Counter />
//         <RandomAdder />
//       </div>
//     </Provider>
//   );
// }

// export default App;

import React from "react";
import { Provider } from "react-redux";
import TodoList from "./Redux/Todo/Todolist";
import TodoForm from "./Redux/Todo/Todoform";
import store from "./Redux/Todo/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
