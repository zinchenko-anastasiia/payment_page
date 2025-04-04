import OrderDetails from "./OrderDetails";

const OrderInfo = () => {
  return (
    <div className="order-info">
      <h3 className="order-title">Order info &lt;= 100 char.</h3>
      <OrderDetails />
    </div>
  );
};

export default OrderInfo;
