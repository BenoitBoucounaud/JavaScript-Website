/* POP-UP */

$("#popup").hide();
$("#popup").delay(1000).slideDown("slow");


$("#page").click(function popupout() {
    $("#popup").animate({left: "100%", opacity: 0.5});
});


/* Text */

$("#texte1").animate({left: "10%",up: "30%"}).delay(6000).animate({left: "50%",up: "70%"});
$("#texte2").animate({left: "20%",down: "20%"}).delay(7000).animate({left: "60%",up: "60%"});
$("#texte3").animate({left: "30%",down: "10%"}).delay(8000).animate({left: "70%",up: "50%"});

