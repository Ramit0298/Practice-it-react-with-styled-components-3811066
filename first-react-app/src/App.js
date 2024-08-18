import "./App.css";
// import ConditionalRenderComponent from "./components/ConditionalRenderComponent";
// import DynamicDataComponent from "./components/DynamicDataComponent";
// import DynamicUpdateComponent from "./components/DynamicUpdateComponent";
// import { OldButton } from "./Random";
// import Button from "./components/Button";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import DynamicGrid from "./components/DynamicGrid";
// import ProductDetails from "./components/ProductDetails";
// import Parent from "./components/Parent";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setData(response.data))
      .catch((e) => console.log("Error fetching data", e));
  }, []);

  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  return (
    <div>
      <GlobalStyles />
      <h1>Global Styles Example</h1>
      {/* <DynamicDataComponent />
      <OldButton label="Click Me!" />

      <DynamicUpdateComponent />
      <ConditionalRenderComponent /> */}
      {/* <Header />
      <h1>My React App</h1>
      <ol>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
      <Button label="Click Me!" />
      <Footer /> */}

      {/* <ProductDetails />

      <Parent /> */}

      {/* <ProductList /> */}

      <DynamicGrid items={items} />
    </div>
  );
}

export default App;
