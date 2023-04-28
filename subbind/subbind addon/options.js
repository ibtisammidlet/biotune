



/*
var addBtn = document.querySelector('.add');
var inputTitle = document.querySelector('.new-note input');


addBtn.addEventListener('click', check);
function check() {
if (inputTitle.value != "") {
addNote();
}else{
let youtubeid = {
  name: ""
}

// store the objects
browser.storage.local.set({youtubeid})
  .then(youtubeiddeleted, onError);
  function youtubeiddeleted() {
alert("youtube ID deleted");
  };
  function onError(error) {
  console.log(error)
}
};
}

function addNote() {
function setItem() {
  console.log("youtube ID saved");
}

function gotyoutubeid(item) {
  alert("your saved id is: "+`${item.youtubeid.name}`);
}

function onError(error) {
  console.log(error)
}

// define 2 objects

let youtubeid = {
  name: inputTitle.value
}

// store the objects
browser.storage.local.set({youtubeid})
  .then(setItem, onError);

browser.storage.local.get("youtubeid")
  .then(gotyoutubeid, onError);

}









var addBtnpercentage = document.querySelector('.addpercentage');
var inputTitlepercentage = document.querySelector('.new-percentage input');

addBtnpercentage.addEventListener('click', setperc);
function setperc() {
	
function setlogconfperc() {
  console.log("confperc saved");
}
function gotconfperc(item) {
  alert("videos watched equal or more then "+`${item.confperc.value}`+ " will be hidden");
}

function onError(error) {
  console.log(error)
}

// define 2 objects

let confperc = {
  value: inputTitlepercentage.value
}

// store the objects
browser.storage.local.set({confperc})
  .then(setlogconfperc, onError);

browser.storage.local.get("confperc")
  .then(gotconfperc, onError);

}



*/

// Store an array of numbers
let data = [] /** var outside **/


async function doIt() {
  var inputs = document.querySelectorAll('input[type="radio"]:checked');
  var choices = "";
  inputs.forEach(function(input) {
    choices += input.value + "";
  });
  data.push(choices);
}


const store = async (data) => { /** using the data **/
chrome.storage.local.set({numbers: numbers}).then(() => {
  console.log("Numbers are stored");
});
// Retrieve the array of numbers
chrome.storage.local.get(["numbers"]).then((result) => {
  console.log("Numbers are " + result.numbers);
});
}


(async start() => { /** global async function **/
	await doIt()  /** await the first function **/
	store(data) /** calling second function n giving it the parama **/
})()

document.querySelector(".btn.btn-success").addEventListener("click", start);


