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

$( "#rootcontainer" ).append('<input id="clickMe" type="button" value="start"/>');

document.getElementById("clickMe").onclick = $(async function() {
    var eduarray = [];
	
$('#mobile_buddylist div.item.buddylistItem').each(function(index, el) { //** used :visible because in time of coding i was using .hide() instead of .remove()
var idwithmbuddy = $(this).attr('id');
var id = idwithmbuddy.split("m_buddy_")
var name = $(this).find("a div").find("strong").text();

eduarray.push({"id": id,  "name": name});
})


$(document).on('click','#clickMe', function(){
	
	
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
});


});

