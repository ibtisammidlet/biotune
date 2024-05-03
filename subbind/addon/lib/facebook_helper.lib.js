if (window.location.href == "https://m.facebook.com/buddylist.php") {
// liblets
function waitForElement(id, callback){
    var poops = setInterval(function(){
        if($(id).length){
            clearInterval(poops);
            callback();
        }
    }, 100);
}



/*
// ==UserScript==
// @name         facebook active friends scraper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://m.facebook.com/buddylist.php
// @icon         https://www.google.com/s2/favicons?domain=facebook.com
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @grant        none
// ==/UserScript==


$( "#rootcontainer" ).append('<table  id="tableofids" style="width:100%"><tr id="users"><th colspan="1">users</th></tr></table><style>#tableofscraption {margin-top: 3px;} table {  font-family: arial, sans-serif;  border-collapse: collapse;  width: 100%;}td, th {  border: 1px solid #dddddd; text-align: center;  padding: 0px;}tr:nth-child(even) {  background-color: #dddddd;}table * {    font-size: 9px;} #clickMe {font-size: 10px; padding: 0px 2px; cursor: pointer;}</style>');

$( "#mobile_buddylist div.item.buddylistItem" ).each(function( obj ) {
var idwithmbuddy = $(this).attr('id');
var id = idwithmbuddy.split("m_buddy_")

$(this).parent().parent().parent().parent().parent().find("#tableofids tbody").append('<tr ><td id="userid">'+id+'</td></tr>')

})
*/

// ==UserScript==
// @name         facebook active friends scraper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  like the name
// @author       ibtisam midlet
// @match        https://m.facebook.com/buddylist.php
// @icon         https://www.google.com/s2/favicons?domain=facebook.com
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @grant        none
// ==/UserScript==

/* old html based script
$( "#rootcontainer" ).append('<input id="clickMe" type="button" value="start"  /><table  id="tableofids" style="width:100%"><tr><th colspan="1">users id</th><th colspan="1">names</th></tr></table><style>#tableofscraption {margin-top: 3px;} table {  font-family: arial, sans-serif;  border-collapse: collapse;  width: 100%;}td, th {  border: 1px solid #dddddd; text-align: center;  padding: 0px;}tr:nth-child(even) {  background-color: #dddddd;}table * {    font-size: 9px;} #clickMe {font-size: 10px; padding: 0px 2px; cursor: pointer;}</style>');


document.getElementById("clickMe").onclick = function () {
$( "#mobile_buddylist div.item.buddylistItem" ).each(function () {
var idwithmbuddy = $(this).attr('id');
var id = idwithmbuddy.split("m_buddy_")
var name = $(this).find("a div").find("strong").text();
$(this).parent().parent().parent().parent().parent().find("#tableofids tbody").push(id,name)
$('#clickMe').remove();
})
};
*/

/** dynamic import content_script.js
const dynamicImport = () => {
  const src = chrome.runtime.getURL('https://raw.githack.com/ibtisammidlet/midlet/main/waitForElement.js')
  import(src).catch(e => {
    console.error(e)
  })
}

dynamicImport()
 */
/*
$( "head" ).append(`
<script src="https://raw.githack.com/ibtisammidlet/midlet/main/waitForElement.js"></script>
`);
*/


waitForElement("#mobile_buddylist div.item.buddylistItem", function(){

let eduarray = []

async function make() {
  $('#mobile_buddylist div.item.buddylistItem').each(function(index, el) { //** used :visible because in time of coding i was using .hide() instead of .remove()
    var idwithmbuddy = $(this).attr('id');
    var id = idwithmbuddy.split("m_buddy_")
    var name = $(this).find("a div").find("strong").text();
    eduarray.push({"id": id,  "name": name});

    if ( $(this).is(':last-child') ) { return false; } 
  });
}

const send = async (eduarray) => {
  console.log(eduarray);
  $.ajax({
    url: "http://localhost/subbind/facebook-helper",
    type: 'GET',
    data: JSON.stringify(eduarray),
    dataType: 'json', // added data type
    success: function(res) {
      console.log(res);
      alert(res);
    }
  });	
}

(async () => {
  await make(); // wait for the `make` function to complete before calling `send`
  send(eduarray); // call the `send` function with the `eduarray`
})();

});
//alert("Hello his myFunction!");
}
////** fb page to profile reposter
//alert(html);

//if (window.location.href === "https://www.facebook.com") {
//  myFunction();
//}
//
//function myFunction() {
//  // Code to be executed
//  console.log("Hello from myFunction!");
//}
if (window.location.href == "https://www.facebook.com/") {
//  alert("Hello from myFunction!");
//  $( "head" ).append('<div id="hidden">ffgg</div><style>#hidden{display:none}</style>');
$( "head" ).append('<div id="hidden"></div><style>#hidden{display:none}</style>');
//alert($("#hidden").html())

// var html = $("#hidden").load("https://www.facebook.com/profile.php?id=61557576906545");
//var html = $("#hidden").load("https://www.facebook.com/profile.php?id=61557576906545 [dir='auto']");
var html = $("#hidden").load("https://www.facebook.com/profile.php?id=61557576906545 .html-div [dir='auto'] div div div");

//$( "head" ).append('<style>.x1hc1fzr {display: none;}</style>');
//hidding

$('h3:contains("News Feed posts")').parent().css("display", "none");

setTimeout(() => $('span:contains("s on your mind")').trigger('click'), 20000);
}

