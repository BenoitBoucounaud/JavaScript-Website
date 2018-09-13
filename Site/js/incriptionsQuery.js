/*Bouton Valide */

$("#btvalider").on("click", function () {
    var tInfos = $(".obligatoire");
    var ok = true;
    var msgErreur = "Les ";

    for (var i = 0; i < tInfos.length; i++) {
        var info = tInfos[i];
        if ($(info).val() === "") {
            ok = false;
            msgErreur += $(info).attr("placeholder") + ", ";
            $(info).css("background-color","red");
        }
        
        else{
            $(info).css("background-color","white");
        }
    }
    msgErreur = msgErreur.substring(0, msgErreur.length - 2) + " sont obligatoires";

    if (!ok) {
        $("#message").html(msgErreur);
    } else {
        $("#message").html("Bien.");
    }

});

/*Bouton reset*/

$("#btreset").on("click", function () {
    
    msgErreur="Essayez encore";
    
    $("#message").html(msgErreur);
    $(".obligatoire").css("background-color","white");
    $(".obligatoire")
            .not(':button, :submit, :reset')
            .val('')
            .removeAttr('checked')
            .removeAttr('selected');
});





