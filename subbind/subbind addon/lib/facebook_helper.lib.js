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