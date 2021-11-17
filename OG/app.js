$(() => {


//-----------------  Declaring variables for global use  --------------------------

     let selectedDisc = [];
     let winningCompareArray = [1,2,3];
     let startDivArray = [1,2,3];
     let stagingDivArray = [];
     let targetDivArray = [];
    

//------------------  functions/logic for nav items: play, rules, and story button(s) functionality  --------------------------

    $("#navBox").click(handleNavClick)
      
    function handleNavClick (e) {
        
        if ($(e.target).attr("id") === "rules") {
            $("#rulesBox").css("display", "block");
            $("#navBox").off("click");
           
        } else if ($(e.target).attr("id") === "story") {
            $("#storyBox").css("display", "block");
            $("#navBox").off("click");

        } else if ($(e.target).attr("id") === "play") {
            $(".disc").css("display", "block");
            play();
        
        };
    };


//---------------------  function to close pop-ups once clicked:  --------------------------


    $(".close").click(() => {
        $(".modal").css("display", "none");
        $("#navBox").click(handleNavClick);
    });


//----------------------  Gameplay:    ------------------------------------------------------

    
    function play() {
        
        $("#stacks .discDiv").on("click", firstClick)
        
        function firstClick(e) {
            console.log(e.target);
            console.log(e.delegateTarget);
            let $clickedDiv = e.delegateTarget;
            // console.log($clickedDiv);
            // console.log(selectedDisc)


    //---------------------  Conditionals to select and move discs:  --------------------------


            if (selectedDisc.length === 0) {
                //if($(e.target).classlist.contains(discDiv)) {
                    $discToAppend = $(e.delegateTarget).find(":first-child");
                    $discToAppend.addClass("selected");

                //} else {
                    //$discToAppend = $(e.target)
                    //$discToAppend.css("background-color", "purple");
                    //$discToAppend.addClass("selected");
                    //console.log("this is e.target" + $discToAppend);
                //}
 
                    selectedDisc.push($(e.delegateTarget).find(":first-child").data("index"));
                    console.log("after step one: " + selectedDisc);

//----------------  Set Conditionals to remove selected disc from current array for tracking of moves  ----------  

                    if ($($clickedDiv).attr("id") === "discDiv1") {
                        startDivArray.shift()
                        console.log("this is where you remove selected disc from discDiv1's array: " + startDivArray);

                    } else if ($($clickedDiv).attr("id") === "discDiv2") {
                        stagingDivArray.shift()
                        console.log("this is where you remove selected disc from discDiv2's array: " + stagingDivArray);

                    } else if ($($clickedDiv).attr("id") === "discDiv3") {
                        targetDivArray.shift()
                        console.log("this is where you remove selected disc from disDiv3's array: " + targetDivArray);

                    }
                
//----------------  Set Conditionals after disc is selected to control moving selected disc (seletedDisc.lenth === 1) ----------

            } else if (selectedDisc.length === 1) {
                console.log($($clickedDiv).attr("id"));
                console.log($($clickedDiv).data("array"));
               
//                    selectedDisc = [];
                    if ($($clickedDiv).attr("id") === "discDiv1") {
                        console.log("you made it to right before your array comparisons")
                        console.log(targetDivArray[0]);
                        console.log(selectedDisc[0]);

                        if (startDivArray[0] > selectedDisc[0] || startDivArray[0] == undefined) {
                            console.log($discToAppend);
                            $discToAppend.removeClass("selected");
                            $discToAppend.prependTo($clickedDiv);
                            startDivArray.push($($discToAppend).data("index"))
                            console.log("this is where you update discDiv1's array: " + startDivArray);

                        } else {
                            $discToAppend.removeClass("selected");
                            selectedDisc = [];
                        }
                        
                    } else if ($($clickedDiv).attr("id") === "discDiv2") {
                        if (stagingDivArray[0] > selectedDisc[0] || stagingDivArray[0] == undefined) {
                            $discToAppend.removeClass("selected");
                            $discToAppend.prependTo($clickedDiv);
                            stagingDivArray.push($($discToAppend).data("index"))
                            console.log("this is where you update discDiv2's array: " + stagingDivArray);
                        } else {
                            $discToAppend.removeClass("selected");
                            selectedDisc = [];
                        }

                    } else if ($($clickedDiv).attr("id") === "discDiv3") {
                        console.log("you made it");
                        console.log(targetDivArray[0]);
                        console.log(selectedDisc[0]);
                        if (targetDivArray[0] > selectedDisc[0] || targetDivArray[0] == undefined) {

                            $discToAppend.removeClass("selected");
                            $discToAppend.prependTo($clickedDiv);
                            targetDivArray.push($($discToAppend).data("index"))
                            console.log("this is where you update disDiv3's array: " + targetDivArray);

                        } else {
                            $discToAppend.removeClass("selected");
                            selectedDisc = [];
                        }

                    } 
                
                // } else { function illegalMoveAlert() {
                //     preventDefault()
                //     alert("You cannot put a larger disc on top of a smaller disc.  Please try again!");
                // }}
                    selectedDisc = [];

            
            } //else if (targetDivArray.length === winningCompareArray.length){
            //                                                  alert("You Won!!!  Great JOB!")
            //console.log(selectedDisc[0]);
            //}
            

           
        };
    



    };

    // function checkIfLegal() {

    //     if ($($clickedDiv).attr("id") === "discDiv1") {
    //         if (startDivArray[0] > selectedDisc);

    //     } else if ($($clickedDiv).attr("id") === "discDiv2") {
    //         stagingDivArray.push($($discToAppend).data("index"))
    //         console.log("this is where you update discDiv2's array: " + stagingDivArray);

    //     } else if ($($clickedDiv).attr("id") === "discDiv3") {
    //         targetDivArray.push($($discToAppend).data("index"))
    //         console.log("this is where you update disDiv3's array: " + targetDivArray);

    //     } 
    // }

  









});