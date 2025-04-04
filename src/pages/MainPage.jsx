import Footer from "../components/Footer";
import LanguageSwitch from "../components/LanguageSwitch";
import OrderInfo from "../components/OrderInfo";
import PaymentSection from "../components/PaymentSection/PaymentSection";

const MainPage = () => {
  return (
    <div className="container">
      <LanguageSwitch />
      <div className="payment-container">
        <PaymentSection />
        <OrderInfo />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
