$(document).ready(function() {
    //goes to de section specified in the tag a
    $("nav").find("a").click(function(e) {
        e.preventDefault();
        var section = $(this).attr("href");
        console.log(section);
        $("html, body").animate({
            scrollTop: $(section).offset().top
        }, 500);
    });

    $(function() {
        $.scrollify({
            section: ".conteiner",
        });
    });

    $(".card span").click(function() {
    	var card=$("#" + this.getAttribute("data-card"))[0];
        card.style.transform="translateX(5%)";
    });

});
