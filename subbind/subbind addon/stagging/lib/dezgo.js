let urlParams = new URLSearchParams(window.location.search);

function waitForElement(id, callback){
    var poops = setInterval(function(){
        if($(id).length){
            clearInterval(poops);
            callback();
        }
    }, 100);
}




waitForElement(".mud-alert-message", function(){
    console.log("element is loaded.. do stuff");

$('textarea.mud-input-slot').text(urlParams.get('query'));
$('input.mud-input-slot').val('anything_3_0');


});