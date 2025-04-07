import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalPayment = () => {
  return (
    <PayPalScriptProvider options={{ "client-id": "Ab5lgoRcTsYyCoaWklt2jwJl64ebq_zYXTOsett9IKezpo5sWln2llrZjU7DtqAU1d_9VUo2f04s3t-X" }}>
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
    </PayPalScriptProvider>
  );
};

export default PayPalPayment;
