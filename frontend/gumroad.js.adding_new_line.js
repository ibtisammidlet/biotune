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

let data2 = [] /** empty array of links to push to it **/
const apiKey = process.env.GUMROAD_API;
const productId = 'TuHWore9OV-Xfh4IYVLq5w==';
async function checkPurchaseStatus() {
  try {
    const response = await fetch(`https://api.gumroad.com/v2/sales?product_id=${productId}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
    const data = await response.json();
	data2.push({'videourl2': data});

  } catch (error) {
    console.error('Error checking purchase status:', error);
  }
}



const usingarray3 = async (data2) => {
	console.log("aray"+JSON.stringify(data2)); 

data2.forEach(item => {
item.videourl2.sales.forEach(sale => {
      if (sale.email) {
        data2.push({'email': sale.email});
      }
    });
});
usingarray4(data2)
}

const SQLite = require('sqlite3').verbose();
const db = new SQLite.Database('bio.db');

const usingarray4 = async (data2) => {
	console.log("usingarray4"+JSON.stringify(data2)); 
	data2.forEach(obj => { 
  db.run(`INSERT INTO gumroad (email) VALUES ('${obj.email}')`);
});
	db.close();

}
(async () => {
	await checkPurchaseStatus()  /** await setting array of links **/
	usingarray3(data2) /** downloading **/
	
	
})()