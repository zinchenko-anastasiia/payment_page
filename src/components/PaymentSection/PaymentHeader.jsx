import Breadcrumb from "../Breadcrumb/Breadcrumb";

const PaymentHeader = () => {
  return (
    <div className="payment-header">
      <Breadcrumb text="Checkout" />
      <div className="payment-title">
        <h1 className="payment-title__headline">5 days free</h1>
        <p className="payment-title__subtitle">then 299.99 UAH per 14 days</p>
      </div>
    </div>
  );
};

export default PaymentHeader;
