

$("htmlmessage").html("");

$("#btvalider").on("click", function () {
        let user = $("#name").val();
        let pwd = $("#passw").val();
        $("#htmlmessage").html(user + "-" + pwd);
    });
    
    
   
   
 /* 
function init() {
    // Efface le contenu du <label>
    $("#htmlmessage").html("");
    // Associe le clic sur le bouton btValider à une fonction anonyme
    //  qui contient des instructions de récupération, de concaténation et d'affectation
    $("#btvalider").on("click", function () {
        let user = $("#name").val();
        let pwd = $("#passw").val();
        $("#htmlmessage").html(user + "-" + pwd);
    });
} /// init

// Exécution de la fonction init() à la fin du chargement du dco HTMl
$(document).ready(init);

*/