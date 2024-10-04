import sgMail from "@sendgrid/mail";
import { apiString } from "../services/apicalls";
import axios from "axios";

sgMail.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY);

export default async function ConfirmOrderMail(
  recipient,
  recipientName,
  OrderId,
  PaymentMethod,
  OrderAmount,
  OrderItems,
  OrderAddress
) {
  const emailBody = {
    recipient,
    recipientName,
    OrderId,
    PaymentMethod,
    OrderAmount,
    OrderItems,
    OrderAddress,
  };

  try {
    // Send the email using the API endpoint
    const response = await axios.post(
      apiString + `/orders/emailservice`,
      emailBody
    );

    // Return status based on the response
    return response.data.success
      ? { status: "success" }
      : { status: "failure" };
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    return { status: "error" }; // Indicate an error occurred
  }
}
