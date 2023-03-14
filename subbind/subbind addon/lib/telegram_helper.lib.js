// ==UserScript==
// @name         telegram helper
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  try to take over the world!
// @author       You
// @match        https://web.telegram.org/k/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=telegram.org
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @require      https://cdn.jsdelivr.net/gh/ibtisammidlet/midlet@main/hideElementsWithoutKeywords.js
// @grant        none
// ==/UserScript==
import("https://cdn.jsdelivr.net/gh/ibtisammidlet/midlet@main/hideElementsWithoutKeywords.js")

//* hide attention deficiting info

$( "head" ).append(`<style>
body {top: unset !important;}
.skiptranslate {display: none;}
#goog-gt- {display: none !important;}
</style>`);

let intervalID = setInterval(myFunction, 1000);
function myFunction() {

var keywords = ["online", "last seen recently"];
var element = $("a.row.no-wrap.row-with-padding.row-clickable.hover-effect.chatlist-chat.chatlist-chat-abitbigger");
hideElementsWithoutKeywords(keywords,element);



}