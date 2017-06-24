alert("JS is working");

var oopsFront =  ["What is an Object"];
var oopsBack  =  ["An object consists of state and behavior. An object stores its states in fields (variables) and exposes its behaviors through methods (functions)."];

$(document).ready(function(){
   


    $("#start").click(function(){
        $("#start").remove();
        $('body').append("<div class='noteCard'> <p>" + oopsFront[0] + oopsBack[0] + "</p> </div>");
        
    });

});

