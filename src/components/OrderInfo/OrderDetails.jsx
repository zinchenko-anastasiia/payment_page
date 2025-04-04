import Divider from "../Divider";
import OrderCost from "./OrderCost";

const OrderDetails = () => {
  return (
    <div className="order-info-content">
      <p className="order-description">Description &lt;= 400 char.</p>
      <Divider />
      <p className="order-product-name">
        Lamel Professional Smart Skin Compact Powder
      </p>
      <p className="order-product-type">Пудра для лица</p>
      <Divider />
      <OrderCost />
    </div>
  );
};

export default OrderDetails;
