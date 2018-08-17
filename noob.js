$(document).ready(function(){
    $(".modal3").click(function(){
        alert("Henüz Kilitlidir.");
    });
    $(window).scroll(function() {
            if ($(this).scrollTop() > 400) {
                $('.navbar-fixed-top').css("background", "transparent");
            } else {
                $('.navbar-fixed-top').css("background", "white");
            }
        });
    
    $(function() {
    $("#myModal").modal();
});
    
});

