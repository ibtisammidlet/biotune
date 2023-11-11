//** css
$( "head" ).append(`<style>
#tableofscraption {
    font-family: 'Open Sans', sans-serif;
    width: 800px;
    text-align: left;
    margin: auto;
    margin-top: 10px;
    border-collapse: collapse;
    overflow: hidden;
    border-radius: 10px;

}

tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}

th {
    padding: 3px 6px;
    background-color: #4eb5ff;
    color: #fff;
}

td {
    padding: 3px 6px;
    color: grey;
    color: #3c3c3c;
    border-left: 2px solid #fff;
}

tr {
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
}

tr:nth-child(2n) {
    background-color: #f8f6ff;
}

#tableofscraption tr:last-child {
    border-bottom: 1px solid #eee;
    border-radius: 10px;
}

#tableofscraption tr {
    transition: background 0.2s;
}

#tableofscraption tr:hover {
    background: #eee;
}
#container {
width: 99% !important;
max-width: unset !important;

}
#content section {
    width: 99% !important;
}
#content aside {
    display: none !important;
}
</style>`);

//* switch to https
if (location.protocol !== 'https:') {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
}


//* checking if the user are on first page
if (window.location.href.indexOf("sources=1&sources=2") > 0) {
window.location="https://www.bindingdb.org/rwd/bind/AdvancedSearch.jsp?kiunit=nM&icunit=nM&submit=repeat&energyterm=kJ%2Fmole&column=KI&startPg=0&Increment=10000";
} else {

$( ".content_index form:nth-child(1)" ).append('<table  id="tableofscraption" style="width:100%"><tbody class="multisort"><tr id="Human" id="MAINxSELECT"><th colspan="1">Target/Host</th><th colspan="1">species</th><th colspan="1">Ki nM</th><th colspan="1">IC50 nM</th><th colspan="1">kd nM</th><th colspan="1">EC50 nM</th><th colspan="1">act as</th></tr></tbody></table>');
/** if not on the first page do the work **/
//* scrapping info and injecting them to the table
$( ".index_table div" ).each(function( index ) {
var Target = $(this).find("div:nth-child(1) .big" ).text();
var species = $(this).find(" div:nth-child(1) span:nth-child(4)" ).text();
var bindingvalue = $(this).find(" div:nth-child(3) span:nth-child(2)" ).text();
//* defining bind types
//* and convert sientific numbers to normal
//* and remove additions text keep nM
if (bindingvalue.includes("Ki") == 1) {
var Ki =  Number(bindingvalue.substring(bindingvalue.lastIndexOf("Ki:  ")+6,bindingvalue.lastIndexOf("nM"))).toPrecision();
var IC50 =  "n/a";
var kd =  "n/a";
var EC50 =  "n/a";
} else if  (bindingvalue.includes("IC50") ==1) {
var IC50 =   Number(bindingvalue.substring(bindingvalue.lastIndexOf("IC50: ")+7,bindingvalue.lastIndexOf("nM"))).toPrecision();
var Ki =  "n/a";
var kd =  "n/a";
var EC50 =  "n/a";
} else if  (bindingvalue.includes("Kd") ==1) {
var kd =  Number(bindingvalue.substring(bindingvalue.lastIndexOf("Kd:  ")+6,bindingvalue.lastIndexOf("nM"))).toPrecision();
var IC50 =  "n/a";
var Ki =  "n/a";
var EC50 =  "n/a";
} else if  (bindingvalue.includes("EC50") ==1) {
var EC50 = Number(bindingvalue.substring(bindingvalue.lastIndexOf("EC50:  ")+8,bindingvalue.lastIndexOf("nM"))).toPrecision();
var IC50 =  "n/a";
var Ki =  "n/a";
var kd =  "n/a";
}

/** setting efficacy **/
if (IC50 != "n/a" && EC50 == "n/a") {
var ACTAS = "antagonist";
}else{
if (IC50 == "n/a" && EC50 == "n/a") {var ACTAS = "";}else{
var ACTAS = "agonist";
}
}



$(this).parent().parent().parent().find("#tableofscraption tbody").append('<tr ><td id="Target">'+Target+'</td><td id="species">'+species+'</td><td id="Ki">'+Ki+'</td><td id="IC50">'+IC50+'</td><td id="kd">'+kd+'</td><td id="EC50">'+EC50+'</td><td id="actas">'+ACTAS+'</td></tr>')
});

/**deleting undefined divs **/
$( "tr :contains('undefined')" ).parent().remove();

//* checking if the data loaded completely or not
var fatched = $(".content_index span.red").text();
var rowCountall = document.getElementById('tableofscraption').rows.length;
var rowCount = rowCountall-1;
if (fatched == rowCount) {
} else {alert("data was not loaded completely, it might be capacity problem or maintenance downtime etc.. try again later")}


/** now using the scraped data **/
/** delete non human study if human study is available for specific receptor **/
if (window.location.href.indexOf("&Increment=") > 0) {
//* firstly set a uniqe id for human study
$( "#tableofscraption").find("tr:contains('(Homo sapiens (Human))')" ).each(function( index ) {
$(this).attr('class', 'Human');
})
//* get list of none human study
$( "#tableofscraption").find("tr:not(.Human)" ).each(function( index ) {
//* get list of none human target
var nonhumantaregt = $(this).find("#Target").text()
//* check if human study have this target
if($(".Human #Target").text().indexOf(''+nonhumantaregt+'') !== -1) {
//* deleting none human study if there a human study for this receptor

/** **/
$( "#tableofscraption tr:not(.Human):not(#Human)" ).each(function( index ) {
    if($(this).find("#Target").text() == nonhumantaregt) {
        $(this).hide()
    } 
})

}
}
)

/** here add efficacy in ki from IC/EC50 
-setting IC50 as antagonist and EC50 as agonist without them overwrite each other
-set Ki as from EC50 as proirity then from IC50 (this without overwriting act as of IC50/EC50)
**/
//** for antagonist
$( "#tableofscraption").find("#actas:contains('antagonist')" ).each(function( index ) {
var targetwithefficacy = $(this).parent().find("#Target").text();
$( "#tableofscraption #EC50:contains('n/a')").parent().find( "#Target:contains('"+targetwithefficacy+"')").each(function( index ) {
$(this).parent().find("#actas").text("antagonist");
})
})
//** for agonist
$( "#tableofscraption").find("#actas:contains('agonist')" ).each(function( index ) {
if($(this).text() === "agonist") {
var targetwithefficacyag = $(this).parent().find("#Target").text();
$( "#tableofscraption #IC50:contains('n/a')").parent().find( "#Target:contains('"+targetwithefficacyag+"')").each(function( index ) {
$(this).parent().find("#actas").text("agonist");
})
}
})



/** deleting other value if ki available **/
$( "#tableofscraption").find("tr #Ki" ).each(function( index ) {

var element = $(this).parent();
//** setting target values of results that have ki
//** the attr added is just edition for future imporvment
if (element.attr('class') && $(this).text() !=="n/a") { //** class & KiValue
element.attr('class', element.attr("class")+' KiValue');
var dubvalue = $(this).parent().find("#Target" ).text();
} else if (!element.attr('class') && $(this).text() !=="n/a"){ //** no class & KiValue
element.attr('class', 'KiValue');
var dubvalue = $(this).parent().find("#Target" ).text();
} else if (!element.attr('class') && $(this).text() =="n/a"){ //** class & no KiValue
}

//** looping thought all results
$( "#tableofscraption").find("tr").each(function( index ) {

if($(this).find("#Ki").text() == "n/a"  && $(this).find("#Target:contains('"+dubvalue+"')").length > 0) { //** skipping who have ki value & who doen't the same target as #Ki results 
$(this).hide();
}
	
}) //** each end

}) //** each end
}

/** the table sorting **/
const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;
const comparer = (idx, asc) => (a, b) => ((v1, v2) =>
    v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
    )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));
// do the work...
document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    const table = th.closest('table');
    Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
        .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
        .forEach(tr => table.appendChild(tr) );
})));
//** ki sort
$(':contains("Ki nM")').trigger('click');









};

//* hidding original table
$(".index_table").hide();


//* analytics
$( "body" ).append(' <script type="text/javascript"> var sc_project=12574329;  var sc_invisible=1;  var sc_security="dc48872a";  </script> <script type="text/javascript" src="https://www.statcounter.com/counter/counter.js" async></script> <noscript><div class="statcounter"><a title="free hit counter" href="https://statcounter.com/" target="_blank"><img class="statcounter" src="https://c.statcounter.com/12574329/0/dc48872a/1/" alt="free hit counter"></a></div></noscript> ');





$(".content_index form[method='post']").append('<button id="PTS" type="button" >copy</button>');

$(async function() {
    var eduarray = [
	{"substance": $("#his").text().substring( $("#his").text().lastIndexOf("exact ") + 6, $("#his").text().lastIndexOf(" (") )},
	{"date": new Date().toISOString().substring(0,10)}
	
	];
	
$('#tableofscraption tr:visible').each(function(index, el) { //** used :visible because in time of coding i was using .hide() instead of .remove()
var Target =  $(this).find("#Target").text();
var species =  $(this).find("#species").text();
var Ki =  $(this).find("#Ki").text();
var IC50 =  $(this).find("#IC50").text();
var kd =  $(this).find("#kd").text();
var EC50 =  $(this).find("#EC50").text();
var actas =  $(this).find("#actas").text();
eduarray.push({"Target": Target,  "species": species,  "Ki": Ki, "IC50": IC50, "kd": kd, "EC50": EC50, "actas": actas});

})


$(document).on('click','#PTS', function(){
/**
console.log(eduarray);
$.ajax({
        url: "http://localhost:3000/subbind",
        type: 'GET',
		data: JSON.stringify(eduarray),
        dataType: 'json', // added data type
        success: function(res) {
            console.log(res);
            alert(res);
        }
});	
**/


/** copytocleapboard **/
// Select the table rows and iterate over each visible row
var textToCopy = "";
$('#tableofscraption td:visible').each(function(index, el) {
  // Append the text of each visible row to the variable
  textToCopy +=  $(this).text() + "    ";
});

// add a new line character ("\n") after every 7th occurrence of four spaces ("    ") in the given string https://you.com/search?q=still+the+same%2C+take+your+time%2C+you+might+need+deffirent+function+because+knowing+the+problem+where+here+is+hard%2C+it+don%27t+add+the+new+line+always+and+when+it+does+it+does+in+8th&cid=c1_4dc26c6a-f73b-48e1-bc1a-122e7720b00d&tbm=youchat
const modifiedString = "Target/Host    species    Ki nM    IC50 nM    kd nM    EC50 nM    act as    \n" + textToCopy.replace(/    /g, (match, offset, str) => {
  const count = str.slice(0, offset).split("    ").length;
  return count % 7 === 0 ? match + "\n" : match;
});

// Create a temporary textarea element and set its value to the text you want to copy
var tempTextarea = $('<textarea>');
tempTextarea.val(modifiedString);

// Append the temporary textarea element to the document body
$(document.body).append(tempTextarea);

// Select the text within the temporary textarea
tempTextarea.select();

// Copy the selected text to the clipboard
document.execCommand("copy");

// Remove the temporary textarea from the document body
tempTextarea.remove();
// https://you.com/search?q=how+to+do+that+for+this+var+instead+of+logging+it+%3A+%2F%2F+starting+copytocleapboard+code%0A%24%28%27%23tableofscraption+tr%3Avisible%27%29.each%28function%28index%2C+el%29+%7B+%2F%2F**+used+%3Avisible+because+in+time+of+coding+i+was+using+.hide%28%29+instead+of+.remove%28%29%0Aconsole.log%28%24%28this%29.text%28%29%2B%22++++%22%29%3B%0A%7D%29+%0A&cid=c1_cda79427-bf50-4139-8bc2-9ca4b1612b48&tbm=youchat
$(".content_index form[method='post'] #PTS:last-child").text("copied!");
});


});


/*
window.data = [];

async function send(data){
	console.log(data)


}

async function pushcycle(){

$(document).on('click','#PTS', await function(){
$( "#tableofscraption tr" ).each( async function() {


window.data.push();

})
});

}

(async () => {
	await pushcycle() 
		send(data)

})()
*/

/** uncompelte , ki sort then others function >>https://stackoverflow.com/questions/70945968/how-to-sort-table-by-two-columns-instead-of-one
const t=(tr,i)=>tr.cells[i].textContent;
$(".multisort tr").get()
  .sort((a,b)=>t(a,0).localeCompare(t(b,0)) || t(a,1).localeCompare(t(b,1)))
  .map(tr=>$(".meterList").append(tr));
*/