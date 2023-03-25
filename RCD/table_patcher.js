    /** converting links to linkable + adding new line **/
    $('comment').each(function(e) {
    $(this).html($(this).html().replace(/((http:|https:)[^\s]+[\w])/g, '<br><a href="$1" target="_blank">$1</a>'));
    
    })
    
    $('a.comment-indicator').click(function(e) {
    if ($(this).parent().find("comment").css('display') == 'none') {
    $(this).parent().find("comment").attr("style","background: #ffd; position: absolute; display: block; border: 1px solid black; padding: 0.5em;")
    
    } else {
    $(this).parent().find("comment").attr("style","display: none;")
    
    }
    });

    /** conditional style **/
    if (window.location.href.indexOf("?m=1") > 0) { //** in mobile
    $( "head" ).append(`<style>
    tbody td {border: 2.5pt solid #3F3F3F !important;  }
    table * {    font-size: 22px !important;}
    #RFD table {width: 2000px !important;}
    #color-meaning table {width: 95% !important;}
    #menu ul li a {font-size: 11px !important;}
    </style>`); 
    } else { //** in desktop
    $( "head" ).append(`<style>
    #RFD td { border-right: 0.5pt solid #3F3F3F !important; border-left: 0.5pt solid #3F3F3F !important; }
    .row {width: 1336px !important;}
    #outer-wrapper {max-width: unset !important;}
    </style>`); 
    }





//** adding id "neurotransmitter name" for subbind
setTimeout(function(){
 	//code goes here
/* closed route
$( "tbody tr td b font[color='#000000']" ).parent().parent().filter("[colspan='2']").css('background', '#e91e63');
*/
//* staging
var serotonin = $( "#RFD > table > tbody > tr:nth-child(3) > td:nth-child(1)" );
var serotonin_raw_spans = serotonin.attr("rowspan") 
//** serotonin_raw_spans >> works

}, 0); //Time before execution




//** unorganized code
/*
//** split rowspan to rows http://jsfiddle.net/tcvax28d/38/
 function split_rows(tbl_param){
        var tbl = $(tbl_param);
        var tempTable = tbl.clone(true);
    var tableBody = $(tempTable).children();
    $(tableBody).children().each(function(index , item){
        var currentRow = item;
        $(currentRow).children().each(function(index1, item1){
                var rows = $(item1).attr("rowspan");
            if(rows>=2)
            {
                // copy the cell
                var item2 = $(item1).clone(true);
                // Remove rowspan
                $(item1).removeAttr("rowspan");
                $(item2).attr("rowspan",(rows)-1);
                console.log("item1:",$(item1).text(),", index:",index1);
                // last item's index in next row
                var indexOfLastElement = $(currentRow).next().children().last().index();
                if(indexOfLastElement < index1)
                {
                     $(currentRow).next().append(item2)
                }
                else
                {
                    // intermediate cell insertion
                    $(item2).insertBefore($(currentRow).next().children().eq(index1));
                }
            }
        });
        
    });
        return tempTable;
}
 function split_cols(tbl_param){
        var tbl = $(tbl_param);
        var tempTable = tbl.clone(true);
    var tableBody = $(tempTable).children();
    $(tableBody).children().each(function(index , item){
        var currentRow = item;
        for (var i=0; i<$(currentRow).children().length;i++){
            var item1 = $(currentRow).children().eq(i);
                var cols = $(item1).attr("colspan");
                if(cols>=2)
                {
                    // copy the cell
                    var item2 = $(item1).clone(true);
                    
                    // Remove rowspan
                    $(item1).removeAttr("colspan");
                    $(item2).attr("colspan", cols-1);
                    // last item's index in next row
                    $(item2).insertAfter(item1);
                }
            
        }
        
    });
        return tempTable;
}
function split_tbl(tbl_param){
        var tbl = split_cols(tbl_param);
        tbl = split_rows(tbl);
        return tbl;
}
const res1 = split_tbl($( "tbody tr:nth-child(1) td[rowspan]" ));
$( "tbody tr:nth-child(1) td[rowspan]" ).append(res1);
*/
