$(() => {


//-----------------  Declaring variables for global use  --------------------------

     let selectedDisc = [];
     let winningCompareArray = [1,2,3];
     let startDivArray = [1,2,3];
     let stagingDivArray = [];
     let targetDivArray = [1,2,3];
    
    //  function $selectDisc (e) {
    //     //        console.log(e.target);
    //     $(e.target).css("background-color", "purple");
    //     //selectedDisc.push($(e.target).data("index"));
    //     console.log(selectedDisc);
    //     console.log(selectedDisc[0]);
    // };
    //                                                      function test() {
    //                                                          console.log("GREAT JOB!!  that worked!")
    //                                                      }


//------------------  functions/logic for nav items: play, rules, and story button(s) functionality  --------------------------

    $("#navBox").click(handleNavClick)
      
    function handleNavClick (e) {
        
        if($(e.target).attr("id") === "rules") {
            $("#rulesBox").css("display", "block");
            $("#navBox").off("click");
           
        } else if($(e.target).attr("id") === "story") {
            $("#storyBox").css("display", "block");
            $("#navBox").off("click");

        } else if($(e.target).attr("id") === "play") {
            $(".disc").css("display", "block");
            play();
        //                                                                      test();
        };

        //                                                                    $("#navBox").click(function(e) {
        //                                                                            let modalClass = 
        //                                                                            $(".modal").css("display", "block");  $(`$(e.target).modal $(`.modal$(e.target`) 
        //                                                                        });
        //                                                                                                 let targetModal = `$(.modal$(e.target))`


    };


//---------------------  function to close pop-ups once clicked:  --------------------------

    $(".close").click(() => {
        $(".modal").css("display", "none");
        $("#navBox").click(handleNavClick);
    });


//----------------------  Gameplay:    ------------------------------------------------------

    
    function play() {
        //console.log(selectedDisc);

        $("#stacks .discDiv").on("click", firstClick)

        function firstClick(e) {
            
            let clickedDiv = e.target;
            console.log(clickedDiv);
            // console.log($(e.target).find(":first-child"));
            // $(e.target).find(":first-child").css("background-color", "purple");
            // console.log(clickedDiv);
            // selectedDisc = [$(e.target.firstchild)]
            // $(selectedDisc).css("background-color", "purple");
            // console.log(clickedDiv);
            // console.log(selectedDisc)

            if (selectedDisc.length === 0) {
                if(e.target.classlist.contains("discDiv")) {
                    $discToAppend = $(e.target).find(":first-child");
                    $discToAppend.css("background-color", "purple");

                } else {
                    $discToAppend = $(e.target)
                    $discToAppend.css("background-color", "purple");
                    console.log("this is e.target" + $discToAppend);
                }
    //                                                                  $(e.target).find(":first-child").css("background-color", "purple");
                    selectedDisc.push($(e.target).find(":first-child").data("index"));
                    console.log(selectedDisc);
                //console.log("this is where it should select a disc and change it's color");

            } else if(selectedDisc.length === 1) {
                    console.log("this is where it will be appended");
                    $discToAppend.prependTo(clickedDiv);
                    selectedDisc = [];
            //    console.log($("#discDiv1"));
            //    clickedDiv.prepend($("#disc1"))
            //     e.target.append()
            
            } else if  (targetDivArray.length === winningCompareArray.length){
            //                                                  alert("You Won!!!  Great JOB!")
            console.log(selectedDisc[0]);
            }
            

           
        };
    

    //     if (selectedDisc[0] === undefined) {

    //         $("#discDiv1").click($selectDisc)
    //             $selectDisc(e);
            
    // //         function $selectDisc (e) {
    // // //            console.log(e.target);
    // //             $(e.target).css("background-color", "purple");
    // //             selectedDisc.push($(e.target).data("index"));
    // //             console.log(selectedDisc);
    // //             console.log(selectedDisc[0]);
    // //         };
    //     } else {
    //         alert("you already clicked");
    //     };
    //                                                          //     $(e.target).css("background-color", "purple");
    //                                                              //     selectedDisc.push($(e.target).data("index"));
    //                                                              //     console.log(selectedDisc);

    //                                                              // };
        



        // $("#discDiv1").click($selectDisc())
        // ;
        // $("#discDiv1").on("click", function(e) {
        //     if ($selectedDisc === null) {
        //         $(e.target).css("background-color", "purple");
        //     };
        // });

    };


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