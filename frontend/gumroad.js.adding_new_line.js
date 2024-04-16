// Make sure to replace 'YOUR_API_KEY' and 'YOUR_PRODUCT_ID' with your actual Gumroad API key and product ID
//const apiKey = process.env.GUMROAD_API;
//const productId = 'TuHWore9OV-Xfh4IYVLq5w==';
//
// Function to check if the visitor has purchased the item
//async function checkPurchaseStatus() {
//  try {
//    const response = await fetch(`https://api.gumroad.com/v2/sales?product_id=${productId}`, {
//      headers: {
//        Authorization: `Bearer ${apiKey}`
//      }
//    });
//    const data = await response.json();
//
//    // Check if the visitor has any purchases for the specified product ID
//    if (data.sales.length > 0) {
//      console.log('Visitor has purchased the item!');
//	  console.log(data);
//    } else {
//      console.log('Visitor has not purchased the item.');
//    }
//  } catch (error) {
//    console.error('Error checking purchase status:', error);
//  }
//}
//
// Call the function to check the purchase status
//checkPurchaseStatus();

