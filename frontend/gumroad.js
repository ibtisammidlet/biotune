// Make sure to replace 'YOUR_API_KEY' and 'YOUR_PRODUCT_ID' with your actual Gumroad API key and product ID
const apiKey = process.env.GUMROAD_API;
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

// gived me list of sells
/**
{
    "success": true,
    "sales": [
        {
            "id": "41szoIC7BeRY4dgMR0kycQ==",
            "email": "gabrieltrevino99@gmail.com",
            "seller_id": "4EJru8j4qqnB4MLsrnj12Q==",
            "timestamp": "4 days ago",
            "daystamp": " 7 Nov 2023 12:53 PM",
            "created_at": "2023-11-07T20:53:20Z",
            "product_name": "receptors function database",
            "product_has_variants": false,
            "price": 0,
            "gumroad_fee": 0,
            "formatted_display_price": "$0",
            "formatted_total_price": "$0",
            "currency_symbol": "$",
            "amount_refundable_in_currency": "0",
            "product_id": "TuHWore9OV-Xfh4IYVLq5w==",
            "product_permalink": "dihxe",
            "partially_refunded": false,
            "chargedback": false,
            "purchase_email": "gabrieltrevino99@gmail.com",
            "state": "CA",
            "zip_code": "",
            "country": "United States",
            "country_iso2": "US",
            "paid": false,
            "has_variants": false,
            "variants_and_quantity": "",
            "has_custom_fields": false,
            "custom_fields": {},
            "order_id": 2445311,
            "is_product_physical": false,
            "is_recurring_billing": false,
            "can_contact": true,
            "is_following": false,
            "disputed": false,
            "dispute_won": false,
            "is_additional_contribution": false,
            "discover_fee_charged": false,
            "is_upgrade_purchase": false,
            "is_more_like_this_recommended": false,
            "is_gift_sender_purchase": false,
            "is_gift_receiver_purchase": false,
            "referrer": "direct",
            "card": {
                "visual": null,
                "type": null,
                "bin": null,
                "expiry_month": null,
                "expiry_year": null
            },
            "product_rating": null,
            "reviews_count": 1,
            "average_rating": 5,
            "license_key": "7764F9EA-380A4036-BB5094FE-B8C3A8CA",
            "license_id": "UTk20WhBGciYHXsw4b9_XQ==",
            "license_disabled": false,
            "is_multiseat_license": false,
            "quantity": 1
        },
        {
            "id": "U_n1VL6NfXQ8P6D8zLdSJA==",
            "email": "a295b0654994b6@theeyeoftruth.com",
            "seller_id": "4EJru8j4qqnB4MLsrnj12Q==",
            "timestamp": "4 days ago",
            "daystamp": " 6 Nov 2023  5:37 PM",
            "created_at": "2023-11-07T01:37:04Z",
            "product_name": "receptors function database",
            "product_has_variants": false,
            "price": 0,
            "gumroad_fee": 0,
            "formatted_display_price": "$0",
            "formatted_total_price": "$0",
            "currency_symbol": "$",
            "amount_refundable_in_currency": "0",
            "product_id": "TuHWore9OV-Xfh4IYVLq5w==",
            "product_permalink": "dihxe",
            "partially_refunded": false,
            "chargedback": false,
            "purchase_email": "a295b0654994b6@theeyeoftruth.com",
            "state": "44",
            "zip_code": "44000",
            "country": "France",
            "country_iso2": "FR",
            "paid": false,
            "has_variants": false,
            "variants_and_quantity": "",
            "has_custom_fields": false,
            "custom_fields": {},
            "order_id": 323280895,
            "is_product_physical": false,
            "is_recurring_billing": false,
            "can_contact": true,
            "is_following": false,
            "disputed": false,
            "dispute_won": false,
            "is_additional_contribution": false,
            "discover_fee_charged": false,
            "is_upgrade_purchase": false,
            "is_more_like_this_recommended": false,
            "is_gift_sender_purchase": false,
            "is_gift_receiver_purchase": false,
            "referrer": "https://ibtisammidlet.gumroad.com/",
            "card": {
                "visual": null,
                "type": null,
                "bin": null,
                "expiry_month": null,
                "expiry_year": null
            },
            "product_rating": null,
            "reviews_count": 1,
            "average_rating": 5,
            "license_key": "F57B404F-B6EA4EEB-ABBE1B8F-24E7850C",
            "license_id": "BXDyFIHOtkwiUAsfGa3bkQ==",
            "license_disabled": false,
            "is_multiseat_license": false,
            "quantity": 1
        },
        {
            "id": "XrSINmzsRFwJ_SNr4ejfRQ==",
            "email": "minercat44@gmail.com",
            "seller_id": "4EJru8j4qqnB4MLsrnj12Q==",
            "timestamp": "8 days ago",
            "daystamp": " 3 Nov 2023  4:44 PM",
            "created_at": "2023-11-03T23:44:54Z",
            "product_name": "receptors function database",
            "product_has_variants": false,
            "price": 0,
            "gumroad_fee": 0,
            "formatted_display_price": "$0",
            "formatted_total_price": "$0",
            "currency_symbol": "$",
            "amount_refundable_in_currency": "0",
            "product_id": "TuHWore9OV-Xfh4IYVLq5w==",
            "product_permalink": "dihxe",
            "partially_refunded": false,
            "chargedback": false,
            "purchase_email": "minercat44@gmail.com",
            "state": "ON",
            "zip_code": "P7E",
            "country": "Canada",
            "country_iso2": "CA",
            "paid": false,
            "has_variants": false,
            "variants_and_quantity": "",
            "has_custom_fields": false,
            "custom_fields": {},
            "order_id": 822610431,
            "is_product_physical": false,
            "is_recurring_billing": false,
            "can_contact": true,
            "is_following": false,
            "disputed": false,
            "dispute_won": false,
            "is_additional_contribution": false,
            "discover_fee_charged": false,
            "is_upgrade_purchase": false,
            "is_more_like_this_recommended": false,
            "is_gift_sender_purchase": false,
            "is_gift_receiver_purchase": false,
            "referrer": "direct",
            "card": {
                "visual": null,
                "type": null,
                "bin": null,
                "expiry_month": null,
                "expiry_year": null
            },
            "product_rating": null,
            "reviews_count": 1,
            "average_rating": 5,
            "license_key": "7D120AA8-5C6E48F3-8F50C44C-2BAFCC90",
            "license_id": "58Vadc-9i_jzWXg2cnEZZA==",
            "license_disabled": false,
            "is_multiseat_license": false,
            "quantity": 1
        },
        {
            "id": "2UioPFgKg0DO5-akgGkxrg==",
            "email": "mbgill222@gmail.com",
            "seller_id": "4EJru8j4qqnB4MLsrnj12Q==",
            "timestamp": "8 days ago",
            "daystamp": " 3 Nov 2023  2:37 PM",
            "created_at": "2023-11-03T21:37:16Z",
            "product_name": "receptors function database",
            "product_has_variants": false,
            "price": 200,
            "gumroad_fee": 56,
            "formatted_display_price": "$2",
            "formatted_total_price": "$2",
            "currency_symbol": "$",
            "amount_refundable_in_currency": "2",
            "product_id": "TuHWore9OV-Xfh4IYVLq5w==",
            "product_permalink": "dihxe",
            "refunded": false,
            "partially_refunded": false,
            "chargedback": false,
            "purchase_email": "mbgill222@gmail.com",
            "full_name": "Michael Gill",
            "state": "AB",
            "zip_code": "T1W",
            "country": "Canada",
            "country_iso2": "CA",
            "paid": true,
            "has_variants": false,
            "variants_and_quantity": "",
            "has_custom_fields": false,
            "custom_fields": {},
            "order_id": 251390463,
            "is_product_physical": false,
            "purchaser_id": "3176085652685",
            "is_recurring_billing": false,
            "can_contact": true,
            "is_following": false,
            "disputed": false,
            "dispute_won": false,
            "is_additional_contribution": false,
            "discover_fee_charged": false,
            "is_upgrade_purchase": false,
            "is_more_like_this_recommended": false,
            "is_gift_sender_purchase": false,
            "is_gift_receiver_purchase": false,
            "referrer": "direct",
            "card": {
                "visual": "**** **** **** 1982",
                "type": "visa",
                "bin": null,
                "expiry_month": null,
                "expiry_year": null
            },
            "product_rating": null,
            "reviews_count": 1,
            "average_rating": 5,
            "license_key": "DC458AE7-8105412B-91CA6650-4D330418",
            "license_id": "i6J-z6rvP2HIiALEbyHSXQ==",
            "license_disabled": false,
            "is_multiseat_license": false,
            "quantity": 1
        },
        {
            "id": "MfEuSl0kuzOSRirH1E0CJA==",
            "email": "pedro.luis.almeida.victor@gmail.com",
            "seller_id": "4EJru8j4qqnB4MLsrnj12Q==",
            "timestamp": "8 days ago",
            "daystamp": " 3 Nov 2023 11:28 AM",
            "created_at": "2023-11-03T18:28:41Z",
            "product_name": "receptors function database",
            "product_has_variants": false,
            "price": 0,
            "gumroad_fee": 0,
            "formatted_display_price": "$0",
            "formatted_total_price": "$0",
            "currency_symbol": "$",
            "amount_refundable_in_currency": "0",
            "product_id": "TuHWore9OV-Xfh4IYVLq5w==",
            "product_permalink": "dihxe",
            "partially_refunded": false,
            "chargedback": false,
            "purchase_email": "pedro.luis.almeida.victor@gmail.com",
            "state": "11",
            "zip_code": "2695-833",
            "country": "Portugal",
            "country_iso2": "PT",
            "paid": false,
            "has_variants": false,
            "variants_and_quantity": "",
            "has_custom_fields": false,
            "custom_fields": {},
            "order_id": 653027839,
            "is_product_physical": false,
            "is_recurring_billing": false,
            "can_contact": true,
            "is_following": false,
            "disputed": false,
            "dispute_won": false,
            "is_additional_contribution": false,
            "discover_fee_charged": false,
            "is_upgrade_purchase": false,
            "is_more_like_this_recommended": false,
            "is_gift_sender_purchase": false,
            "is_gift_receiver_purchase": false,
            "referrer": "direct",
            "card": {
                "visual": null,
                "type": null,
                "bin": null,
                "expiry_month": null,
                "expiry_year": null
            },
            "product_rating": null,
            "reviews_count": 1,
            "average_rating": 5,
            "license_key": "137E1094-A55E40FE-97431526-87985485",
            "license_id": "DSL9RSUjcX71-KDcdbL8uA==",
            "license_disabled": false,
            "is_multiseat_license": false,
            "quantity": 1
        },
        {
            "id": "eO04sWt-Wn4wO_-U_V5RZg==",
            "email": "siwex56870@jucatyo.com",
            "seller_id": "4EJru8j4qqnB4MLsrnj12Q==",
            "timestamp": "8 days ago",
            "daystamp": " 3 Nov 2023  9:44 AM",
            "created_at": "2023-11-03T16:44:49Z",
            "product_name": "receptors function database",
            "product_has_variants": false,
            "price": 0,
            "gumroad_fee": 0,
            "formatted_display_price": "$0",
            "formatted_total_price": "$0",
            "currency_symbol": "$",
            "amount_refundable_in_currency": "0",
            "product_id": "TuHWore9OV-Xfh4IYVLq5w==",
            "product_permalink": "dihxe",
            "partially_refunded": false,
            "chargedback": false,
            "purchase_email": "siwex56870@jucatyo.com",
            "state": "QLD",
            "zip_code": "4000",
            "country": "Australia",
            "country_iso2": "AU",
            "paid": false,
            "has_variants": false,
            "variants_and_quantity": "",
            "has_custom_fields": false,
            "custom_fields": {},
            "order_id": 656910847,
            "is_product_physical": false,
            "is_recurring_billing": false,
            "can_contact": true,
            "is_following": false,
            "disputed": false,
            "dispute_won": false,
            "is_additional_contribution": false,
            "discover_fee_charged": false,
            "is_upgrade_purchase": false,
            "is_more_like_this_recommended": false,
            "is_gift_sender_purchase": false,
            "is_gift_receiver_purchase": false,
            "referrer": "direct",
            "card": {
                "visual": null,
                "type": null,
                "bin": null,
                "expiry_month": null,
                "expiry_year": null
            },
            "product_rating": null,
            "reviews_count": 1,
            "average_rating": 5,
            "license_key": "36954DAA-AF1C4651-B44B1592-9DF78147",
            "license_id": "EDhuDO9K8YTPfUn5ZD5S7A==",
            "license_disabled": false,
            "is_multiseat_license": false,
            "quantity": 1
        },
        {
            "id": "nqmd2R7Kqgi07agESV7v3w==",
            "email": "tomuldoon@outlook.com",
            "seller_id": "4EJru8j4qqnB4MLsrnj12Q==",
            "timestamp": "8 days ago",
            "daystamp": " 3 Nov 2023  9:39 AM",
            "created_at": "2023-11-03T16:39:53Z",
            "product_name": "receptors function database",
            "product_has_variants": false,
            "price": 0,
            "gumroad_fee": 0,
            "formatted_display_price": "$0",
            "formatted_total_price": "$0",
            "currency_symbol": "$",
            "amount_refundable_in_currency": "0",
            "product_id": "TuHWore9OV-Xfh4IYVLq5w==",
            "product_permalink": "dihxe",
            "partially_refunded": false,
            "chargedback": false,
            "purchase_email": "tomuldoon@outlook.com",
            "state": "HRT",
            "zip_code": "AL1",
            "country": "United Kingdom",
            "country_iso2": "GB",
            "paid": false,
            "has_variants": false,
            "variants_and_quantity": "",
            "has_custom_fields": false,
            "custom_fields": {},
            "order_id": 509061631,
            "is_product_physical": false,
            "purchaser_id": "6145404153816",
            "is_recurring_billing": false,
            "can_contact": true,
            "is_following": false,
            "disputed": false,
            "dispute_won": false,
            "is_additional_contribution": false,
            "discover_fee_charged": false,
            "is_upgrade_purchase": false,
            "is_more_like_this_recommended": false,
            "is_gift_sender_purchase": false,
            "is_gift_receiver_purchase": false,
            "referrer": "direct",
            "card": {
                "visual": null,
                "type": null,
                "bin": null,
                "expiry_month": null,
                "expiry_year": null
            },
            "product_rating": null,
            "reviews_count": 1,
            "average_rating": 5,
            "license_key": "BA7BBAF5-5DC64F21-A91AAD02-FD22D4AD",
            "license_id": "W0uLnM1TjUrqd-r6vQ9Vqw==",
            "license_disabled": false,
            "is_multiseat_license": false,
            "quantity": 1
        },
        {
            "id": "W9CeI0yIQUwHBZprs8nEBg==",
            "email": "playerjurdy.cca@gmail.com",
            "seller_id": "4EJru8j4qqnB4MLsrnj12Q==",
            "timestamp": "about 1 month ago",
            "daystamp": "10 Oct 2023  9:33 PM",
            "created_at": "2023-10-11T04:33:09Z",
            "product_name": "receptors function database",
            "product_has_variants": false,
            "price": 0,
            "gumroad_fee": 0,
            "formatted_display_price": "$0",
            "formatted_total_price": "$0",
            "currency_symbol": "$",
            "amount_refundable_in_currency": "0",
            "product_id": "TuHWore9OV-Xfh4IYVLq5w==",
            "product_permalink": "dihxe",
            "partially_refunded": false,
            "chargedback": false,
            "purchase_email": "playerjurdy.cca@gmail.com",
            "state": "MI",
            "zip_code": "",
            "country": "United States",
            "country_iso2": "US",
            "paid": false,
            "has_variants": false,
            "variants_and_quantity": "",
            "has_custom_fields": false,
            "custom_fields": {},
            "order_id": 987063167,
            "is_product_physical": false,
            "is_recurring_billing": false,
            "can_contact": true,
            "is_following": false,
            "disputed": false,
            "dispute_won": false,
            "is_additional_contribution": false,
            "discover_fee_charged": false,
            "is_upgrade_purchase": false,
            "is_more_like_this_recommended": false,
            "is_gift_sender_purchase": false,
            "is_gift_receiver_purchase": false,
            "referrer": "direct",
            "card": {
                "visual": null,
                "type": null,
                "bin": null,
                "expiry_month": null,
                "expiry_year": null
            },
            "product_rating": null,
            "reviews_count": 1,
            "average_rating": 5,
            "license_key": "400CF2D2-ABEE4B98-AF4B89EA-19C8F951",
            "license_id": "Uo9eU5JsSiaWzRxHvxGjTQ==",
            "license_disabled": false,
            "is_multiseat_license": false,
            "quantity": 1
        },
        {
            "id": "tWBGNSnXKGrb59HvUVminA==",
            "email": "dwalters222@yahoo.com",
            "seller_id": "4EJru8j4qqnB4MLsrnj12Q==",
            "timestamp": "about 1 month ago",
            "daystamp": " 1 Oct 2023  7:14 AM",
            "created_at": "2023-10-01T14:14:23Z",
            "product_name": "receptors function database",
            "product_has_variants": false,
            "price": 0,
            "gumroad_fee": 0,
            "formatted_display_price": "$0",
            "formatted_total_price": "$0",
            "currency_symbol": "$",
            "amount_refundable_in_currency": "0",
            "product_id": "TuHWore9OV-Xfh4IYVLq5w==",
            "product_permalink": "dihxe",
            "partially_refunded": false,
            "chargedback": false,
            "purchase_email": "dwalters222@yahoo.com",
            "state": "FL",
            "zip_code": "",
            "country": "United States",
            "country_iso2": "US",
            "paid": false,
            "has_variants": false,
            "variants_and_quantity": "",
            "has_custom_fields": false,
            "custom_fields": {},
            "order_id": 68590975,
            "is_product_physical": false,
            "is_recurring_billing": false,
            "can_contact": true,
            "is_following": false,
            "disputed": false,
            "dispute_won": false,
            "is_additional_contribution": false,
            "discover_fee_charged": false,
            "is_upgrade_purchase": false,
            "is_more_like_this_recommended": false,
            "is_gift_sender_purchase": false,
            "is_gift_receiver_purchase": false,
            "referrer": "https://ibtisammidlet.gumroad.com/",
            "card": {
                "visual": null,
                "type": null,
                "bin": null,
                "expiry_month": null,
                "expiry_year": null
            },
            "product_rating": null,
            "reviews_count": 1,
            "average_rating": 5,
            "license_key": "ACA3F3D0-B6734F47-B04E31C5-2639589E",
            "license_id": "7Ekw3FLKDDEsTAynAxZblA==",
            "license_disabled": false,
            "is_multiseat_license": false,
            "quantity": 1
        },
        {
            "id": "u1LUKEwhue_IftAyf_Jf-A==",
            "email": "squadronik@o2.pl",
            "seller_id": "4EJru8j4qqnB4MLsrnj12Q==",
            "timestamp": "about 1 month ago",
            "daystamp": " 1 Oct 2023  1:59 AM",
            "created_at": "2023-10-01T08:59:26Z",
            "product_name": "receptors function database",
            "product_has_variants": false,
            "price": 0,
            "gumroad_fee": 0,
            "formatted_display_price": "$0",
            "formatted_total_price": "$0",
            "currency_symbol": "$",
            "amount_refundable_in_currency": "0",
            "product_id": "TuHWore9OV-Xfh4IYVLq5w==",
            "product_permalink": "dihxe",
            "partially_refunded": false,
            "chargedback": false,
            "purchase_email": "squadronik@o2.pl",
            "state": "14",
            "zip_code": "00-508",
            "country": "Poland",
            "country_iso2": "PL",
            "paid": false,
            "has_variants": false,
            "variants_and_quantity": "",
            "has_custom_fields": false,
            "custom_fields": {},
            "order_id": 914554239,
            "is_product_physical": false,
            "purchaser_id": "2994373175901",
            "is_1.7recurring_billing": false,
            "can_contact": true,
            "is_following": false,
            "disputed": false,
            "dispute_won": false,
            "is_additional_contribution": false,
            "discover_fee_charged": false,
            "is_upgrade_purchase": false,
            "is_more_like_this_recommended": false,
            "is_gift_sender_purchase": false,
            "is_gift_receiver_purchase": false,
            "referrer": "direct",
            "card": {
                "visual": null,
                "type": null,
                "bin": null,
                "expiry_month": null,
                "expiry_year": null
            },
            "product_rating": null,
            "reviews_count": 1,
            "average_rating": 5,
            "license_key": "27DB841F-12434ABA-A51F937E-D7D50BEE",
            "license_id": "XpxbMGW-ZBRM3kb3SYJ5fQ==",
            "license_disabled": false,
            "is_multiseat_license": false,
            "quantity": 1
        }
    ],
    "next_page_key": "20231001085926-914554239",
    "next_page_url": "/v2/sales?page_key=20231001085926-914554239&product_id=TuHWore9OV-Xfh4IYVLq5w%3D%3D"
}
**/

// Function to check if the visitor has purchased the item
async function nextpages() {
  try {
    const response = await fetch(`https://api.gumroad.com/v2/sales?product_id=${productId}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
    const data = await response.json().then(data => {
console.log(data.next_page_url)
  // Check if there is a next page
  if (data.next_page_url && data.next_page_key) {
	  
	  

async function nextpages2() {
  try {
    const response = await fetch(`https://api.gumroad.com${data.next_page_url}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
    const response2 = await response.json().then(data => { console.log("this is data2"+JSON.stringify(data))
    });
  } catch (error) {
    console.error('Error checking purchase status:', error);
  }
}
nextpages2();

	  
	  
	  
	  
	  
  }
   });
  } catch (error) {
    console.error('Error checking purchase status:', error);
  }
}

// Call the function to check the purchase status
nextpages();





let data2 = [] /** empty array of links to push to it **/

async function getimgdownloadlinks() { /** fatch page, then put links to Array then console-log it, then console errors **/
  try {
    const response = await fetch(`https://api.gumroad.com/v2/sales?product_id=${productId}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
    const data = await response.json().then(data => {
console.log(data.next_page_url)
data2.push({'videourl': 'https://api.gumroad.com' + data.next_page_url});

	  
	  









  }
   );
  } catch (error) {
    console.error('Error checking purchase status:', error);
  }  
}

const downloadlinks = async (data2) => { /** waiting data defined done like this, outside that function **/
console.log(JSON.stringify(data2))
async function nextpages2() {



  try {
    const response = await fetch(`${data2[data2.length - 1].videourl}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
    const response2 = await response.json().then(data => { console.log("this is data3"+JSON.stringify(data)) 
  if (data.next_page_url && data.next_page_key) {

	data2.push({'videourl': 'https://api.gumroad.com' + data.next_page_url});
	console.log("imhere"+JSON.stringify(data2));
downloadlinks(data2)

} else {usingarray(data2)}
    });
  } catch (error) {
    console.error('Error checking purchase status:', error);
  }
  

}
nextpages2();

}

const usingarray = async (data2) => {
	console.log("aray"+JSON.stringify(data2)); /** for ai: i want to type a function here, that excuted after downloadlinks function has been excuted, but it seems because the first function getimgdownloadlinks declared some stuff on data2 array the (async () => { finction don't wait downloadlinks to complete before trigering usingarray **/
  for (const item of data2) {
    try {
      const response = await fetch(item.videourl, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        }
      });
      const result = await response.json();
      console.log(result);
	  
      data2.push({'videourl2': result});

	  
    } catch (error) {
      console.error("Error fetching or parsing JSON:", error);
    }
  } 	  console.log("aray"+JSON.stringify(data2)); 
usingarray2(data2)
}

const usingarray2 = async (data2) => {
	console.log("aray"+JSON.stringify(data2));
	
data2.forEach(item => {
  if (item.videourl2 && item.videourl2.success && item.videourl2.sales) {
    item.videourl2.sales.forEach(sale => {
      if (sale.email) {
        data2.push({'email': sale.email});
      }
    });
  }
});
console.log("aray"+JSON.stringify(data2)); 
usingarray3(data2)

}

const SQLite = require('sqlite3').verbose();
const db = new SQLite.Database('bio.db');

const usingarray3 = async (data2) => {
	console.log("aray3"+JSON.stringify(data2)); 
	  /** inject to sqlite **/
db.run(`DELETE FROM gumroad WHERE email IS NOT NULL`);
data2.forEach(obj => { 
  if (obj.email) {
    console.log(obj.email);
	
  db.run(`INSERT INTO gumroad (email) VALUES ('${obj.email}')`);

  }
});
	db.close();


}

(async () => {
	await getimgdownloadlinks()  /** await setting array of links **/
	await downloadlinks(data2) /** downloading **/
	
	
})()