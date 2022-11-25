import ShoppingItem from "./components/ShoppingItem";
import "./App.css";

function App() {
  const shoppingList = [
    { productName: "soap kit", price: 30, productPhoto: "product1.jpeg" },
    { productName: "hands soap", price: 20, productPhoto: "product2.jpeg" },
    { productName: "comb", price: 10, productPhoto: "product3.jpeg" },
    { productName: "shampoo", price: 50, productPhoto: "product4.jpeg" },
  ];
  return (
    <div className="container">
      <div className="header">
        <h1>shopping List:</h1>
      </div>
      {shoppingList.map((item, index) => {
        return (
          <ShoppingItem
            key={index}
            productName={item.productName}
            price={item.price}
            productPhoto={item.productPhoto}
          ></ShoppingItem>
        );
      })}
    </div>
  );
}

export default App;
