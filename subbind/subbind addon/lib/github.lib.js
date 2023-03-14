//** hide none js python from search result
let intervalID = setInterval(myFunction, 1000);
function myFunction() {

var keywords = ["python", "js", "html", "css", "Shell"];
var element = $('div[data-testid="results-list"]').children();
hideElementsWithoutKeywords(keywords,element);

}