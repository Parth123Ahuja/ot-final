import sgMail from "@sendgrid/mail";
import { apiString } from "../services/apicalls";

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

// console.log("emailservice called");
// const currentDate= new Date().toLocaleString()
// const ComfirmOrder_msg = {
//     to: `${recipient}`, // Change to your recipient
//     from: 'contact@organicmatki.in', // Change to your verified sender
//     subject: 'Your order is confirmed',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: `<div style="font-family: inherit; text-align: inherit">Dear ${recipientName},<br>
//     <br>
//     Thank you for shopping with us!<br>
//     <br>
//     We are thrilled to confirm that your ${OrderId} has been successfully placed. Below are the details of your order:<br>
//     <br>
//     Order Summary:<br>
//     <br>
//     - Order Date: ${currentDate}<br>
//     - Order Number: ${OrderId}<br>
//     - Total Amount: Rs. ${OrderAmount}<br>
//     - Payment Method: ${PaymentMethod}<br>
//     Order Items:<br>
//     <ul>
//     ${OrderItems.map(item => `
//       <li>
//         Product Name: ${item.name}<br>
//         Quantity: ${item.quantity}<br>
//         Price: ${item.discountprice}<br>
//       </li>
//     `).join('')}
//     </ul>
//     Shipping Address: ${OrderAddress}<br>
//     <br>
//     Thank you for choosing us! Our team will process your order promptly.<br>
//     <br>
//     Best regards,</div>
//     <div style="font-family: inherit; text-align: inherit">Organic Matki</div>`,
// }

// console.log(ComfirmOrder_msg);

// sgMail.send(ComfirmOrder_msg).then(() => {
//     console.log('Email sent')
//   }).catch((error) => {
//     console.error(error)
// })
