import "./ShoppingItem.css";

function ShoppingItem(props) {
  return (
    <div className="shopping_item">
      <div className="expense_item_container">
        <h2 className="shopping_item__description ">
          <span>Product Name:</span> {props.productName}
        </h2>
        <div className="shopping_item__price">
          <span>Price: </span>
          {props.price}
        </div>
      </div>
      <img
        className="shopping_item__image"
        src={require(`../assets/${props.productPhoto}`)}
      ></img>
    </div>
  );
}

export default ShoppingItem;
