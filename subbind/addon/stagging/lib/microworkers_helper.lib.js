// ==UserScript==
// @name         microworkers
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.microworkers.com/jobs.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=microworkers.com
// @grant        none
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==


$( "div.jobsuccess  p").each(function( ) {


var percentage = $(this).text().trim();
if (percentage < 74 || percentage == "N/A" )  {

$(this).parent().parent().hide();
}

});

$( "div.jobstatus").each(function( ) {


var TTF = $(this).text();
if (TTF > 15  )  {
console.log(TTF)

$(this).parent().hide();
}

});