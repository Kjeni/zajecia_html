$(document).ready(function(){
    $("form").submit(function(event){
        // co oznacza $ jak zrobic walidacje uwzgledniajaca polskie znaki
        var regex = /^[a-zA-Z]+$/;
        var value = $("#name").val();
        if(regex.test(value) == false){
            $("#wiadomosc").html('<p class="error">Nie prawiedłowe!</p>').show();
            // Preventing form submission
            event.preventDefault();
        }
        else{
            $("#tak").html('Witaj!' + ' ' + value).show();
            // Preventing form submission
            event.preventDefault();

        }
    });
});