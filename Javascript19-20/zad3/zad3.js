$(document).ready(function(){
    $("p")
        .mouseover(function(){
            $(this).css("background-color", "yellow");
        })
        .mouseout(function(){
            $(this).css("background-color", "silver");
        })
  }); //zeby zostało zostawimy samo mouseover lub hover