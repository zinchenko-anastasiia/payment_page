import Button from "../components/button";
import Divider from "../components/divider";
import PaymentForm from "../components/paymentForm";
import AppleLogo from "./../assets/icons8-apple.svg";

const MainPage = () => {
  return (
    <div className="container">
      <div className="payment-content">
        <div className="payment-header">
          <div className="breadcrumbs">
            <p className="breadcrumbs-text">Checkout</p>
          </div>
          <div className="payment-title">
            <h1 className="payment-title__headline">5 days free</h1>
            <p className="payment-title__subtitle">
              then 299.99 UAH per 14 days
            </p>
          </div>
        </div>
        <Button
          label="Pay"
          variant="dark"
          icon={<img src={AppleLogo} alt="Apple logo" />}
        />
        <PaymentForm />
        <div className="payment-warning">
          You'll have your <strong>Plan Pro during 1 year</strong>. After this
          period of time, your plan will be{" "}
          <strong>automatically renewed</strong> with its original price without
          any discounts applied.
        </div>
      </div>
      <div className="order-info">
        <h3 className="order-title">Order info &lt;= 100 char.</h3>
        <div className="order-info-content">
          <p className="order-description">Description &lt;= 400 char.</p>
          <Divider />
          <p className="order-product-name">
            Lamel Professional Smart Skin Compact Powder
          </p>
          <p className="order-product-type">Пудра для лица</p>
          <Divider />
          <div className="order-cost">
            <p className="order-cost-text">5 days free</p>
            <p className="order-cost-subscription">
              then 299.99 UAH per 14 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
