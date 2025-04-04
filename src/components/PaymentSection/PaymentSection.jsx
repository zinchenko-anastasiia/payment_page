import Button from "../Button";
import PaymentForm from "./PaymentForm";
import AppleLogo from "./../../assets/icons8-apple.svg";
import PaymentHeader from "./PaymentHeader";
import PaymentWarning from "./PaymentWarning";

const PaymentSection = () => {
  return (
    <div className="payment-content">
      <PaymentHeader />
      <Button
        label="Pay"
        variant="dark"
        icon={<img src={AppleLogo} alt="Apple logo" />}
      />
      <PaymentForm />
      <PaymentWarning />
    </div>
  );
};

export default PaymentSection;
