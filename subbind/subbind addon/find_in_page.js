$(document).ready(function(){

         page = $('#RFD').text();

const urlParams = new URLSearchParams(window.location.search);

         searchedText = urlParams.get('query');
         console.log(searchedText)
//**=> works
        if(searchedText == ''){
/*           $("font:contains('"+searchedText+"')").css({"color":"#1D1F20","background":"#ccc"}); */

        }else{
/*          $("font").css({"color":"#1D1F20","background":"#ccc"}); */
           $("font:contains('"+searchedText+"')").css({"color":"#fff","background":"#e91e63"});
        }
});

/*
<html>
<head>
    <title>Test page</title>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"></script>
</head>
<body bgcolor="#ccc">
<input type="text" id="searchfor"></input>
    <p id="all_text">qwewerqweterter
    
    </p>
  <p>chao cac ban</p>
</body>
  
</html>
*/

//** ibtimod of => https://codepen.io/Bossken26/pen/wjEBdd