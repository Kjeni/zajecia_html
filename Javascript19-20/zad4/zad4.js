$(document).ready(function(){
    $("select")
        .change(function() {
        var value = $("option:selected").val();
        alert("wybrałeś:" + " " + value);
    })
});