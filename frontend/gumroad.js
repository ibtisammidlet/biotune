// Make sure to replace 'YOUR_API_KEY' and 'YOUR_PRODUCT_ID' with your actual Gumroad API key and product ID
const apiKey = 'YHaOCMShjBHFjf48RC7sfH_aQ1EiVrgKJYfpWV94R6w';
const productId = 'TuHWore9OV-Xfh4IYVLq5w==';

// Function to check if the visitor has purchased the item
async function checkPurchaseStatus() {
  try {
    const response = await fetch(`https://api.gumroad.com/v2/sales?product_id=${productId}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
    const data = await response.json();

    // Check if the visitor has any purchases for the specified product ID
    if (data.sales.length > 0) {
      console.log('Visitor has purchased the item!');
    } else {
      console.log('Visitor has not purchased the item.');
    }
  } catch (error) {
    console.error('Error checking purchase status:', error);
  }
}

// Call the function to check the purchase status
checkPurchaseStatus();
// https://you.com/search?q=make+a+js+code+that+check+if+visitor+had+preachesed+this+item+from+gumroad&cid=c1_41d6c38f-bd04-4076-b724-1ace647da0d1&tbm=youchat