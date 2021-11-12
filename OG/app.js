$(() => {

//    console.log("ready")

    $("#navBox").click(function(e) {
        if($(e.target).attr("id") === "rules") {
            $("#rulesBox").css("display", "block");
            //                      console.log($(e.target));
        } else if($(e.target).attr("id") === "story") {
            $("#storyBox").css("display", "block");
        };

    });


    $("#stacks").on("click", ".disc", function(e) {
    //                                 console.log($target);
    //                                 let $target = $("e.target")
    //                                 $("e.target").stopImmediatePropagation();
    //                                 e.target.style.backgroundColor = "purple";
         $(e.target).css("background-color", "purple");
    });

    //                                  $("#disc1").css("background-color", "purple");
























});