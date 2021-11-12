$(() => {


//-----------------  Declaring variables for global use  --------------------------

    let $selectedDisc = null;
    let startDivArray = [];
    let stagingDivArray = [];
    let targetDivArray = [];



//------------------  functions/logic for play, rules, and story button(s) functionality  --------------------------

    $("#navBox").click(function(e) {
        
        if($(e.target).attr("id") === "rules") {
            $("#rulesBox").css("display", "block");
            //                                                  $("#navBox").off("click");  attempting to 
           
        } else if($(e.target).attr("id") === "story") {
            $("#storyBox").css("display", "block");

        } else if($(e.target).attr("id") === "play") {
            $(".disc").css("display", "block");

        };

        // $("#navBox").click(function(e) {
            //     let modalClass = 
            //     $(".modal").css("display", "block");  $(`$(e.target).modal $(`.modal$(e.target`) 
            // });
            //                          let targetModal = `$(.modal$(e.target))`


    });


//-------------------  function to close pop-ups once clicked:  --------------------------

    $(".close").click(() => {
        $(".modal").css("display", "none")
    })


//-------------------  Gameplay:    ------------------------------------------------------

    function play() {
        

    }


    // $("#stacks").on("click", ".disc", function(e) {
    // //                                 console.log($target);
    // //                                 let $target = $("e.target")
    // //                                 $("e.target").stopImmediatePropagation();
    // //                                 e.target.style.backgroundColor = "purple";
    //      $(e.target).css("background-color", "purple");
    // });

    // $("#stacks").click(function() {
        
        
    // })

    //     function $selectDisc(e) {
    //                 $selectedDisc = $(e.target);
    //                 $(e.target).css("background-color", "purple");
    //             }
                
    //     function $moveDisc(e) {
    //         $(e.target).append($selectedDisc);
    //     }
    // //                                  $("#disc1").css("background-color", "purple");
























});