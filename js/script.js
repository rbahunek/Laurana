$(document).ready(function(){
    $(".burger").click(function(){
        if($(this).siblings(".uk-dropdown").hasClass("uk-open")){
          $(this).addClass("active");
        }else{
          $(this).removeClass("active");
        }
        
    });

});