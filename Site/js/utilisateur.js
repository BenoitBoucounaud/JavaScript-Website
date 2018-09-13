$("#btvalider").on("click", function () {


/// Get data
    $.get(
            "../json/utilisateur.json",
            /// Attribution
                    (function (data) {
                        console.log(data);

                        /// Get valeurs des inputs
                        var loguser = $("#userlogemail").val();
                        var logmdp = $("#userlogmdp").val();
                        console.log(logmdp);
                        console.log(loguser);
                        console.log("test");

                        ///Verification des valeurs
                        var verif = "";
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].user === loguser && data[i].mdp === logmdp) {
                                verif = "Vous êtes des notres...";
                            } else if (data[i].user === loguser && data[i].mdp !== logmdp) {
                                verif = "Votre mot de passe ne nous est pas familier ..."
                            } else {
                                verif = "Vous n'êtes pas des notres ...";

                            }
                        }
                        $("#verification").html(verif);
                    }
                    )
                    , "json"
                    );

});
