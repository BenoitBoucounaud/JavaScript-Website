$("#btvalider").on("click", function () {
    var tInfos = $(".obligatoire");
    var ok = true;
    var msgErreur = "Les ";

    for (var i = 0; i < tInfos.length; i++) {
        var info = tInfos[i];
        if ($(info).val() === "") {
            ok = false;
            msgErreur += $(info).attr("placeholder") + ",";
        }
    }
    msgErreur = msgErreur.substring(0, msgErreur.length - 1) + " sont obligatoires";
    
    if (!ok) {
        $("#htmlmessage").html(msgErreur);
    }
    else {
        $("#htmlmessage").html("Bien.");
    }

});


