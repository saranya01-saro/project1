$(document).ready(function(){
        $('input[type="checkbox"]').click(function(){
            if($(this).prop("checked") == true){
                console.log("Checkbox is checked.");
                $('.sub').click(function() {
               var link = $("<a>");
               link.attr("href", "1.html");
               link.attr("title", "Google.com");
               link.text("Google");
               $(".sub").html(link);
           });
            }
            else if($(this).prop("checked") == false){
                console.log("Checkbox is unchecked.");
            }
        });
    });
