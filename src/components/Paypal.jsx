import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPal = () => {
  return (
    <PayPalScriptProvider options={{ "client-id": "YOUR_CLIENT_ID_HERE" }}>
      <div>
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [{ amount: { value: "10.00" } }],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              alert("Transaction completed by " + details.payer.name.given_name);
            });
          }}
        />
      </div>
    </PayPalScriptProvider>
  );
};

export default PayPal;
