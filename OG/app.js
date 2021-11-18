$(() => {


//-----------------  Declaring variables for global use  --------------------------

     let selectedDisc = [];
     let winningCompareArray = [1,2,3];
     let startDivArray = [1,2,3];
     let stagingDivArray = [];
     let targetDivArray = [];
     let game = false;
    //console.log(targetDivArray.length);
    //checkForWin(targetDivArray, winningCompareArray);

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
            let $clickedDiv = e.delegateTarget;


    //---------------------  Conditionals to select and move discs:  --------------------------


            if (selectedDisc.length === 0) {
                $discToAppend = $(e.delegateTarget).find(":first-child");
                $discToAppend.addClass("selected");
                selectedDisc.push($(e.delegateTarget).find(":first-child").data("index"));
                console.log("after step one: " + selectedDisc);


//----------------  Set Conditionals to remove selected disc from current array for tracking of moves  ----------  

                if ($($clickedDiv).attr("id") === "discDiv1") {
                    startDivArray.sort();
                    startDivArray.shift();
                    console.log("this is where you remove selected disc from discDiv1's array: " + startDivArray);

                } else if ($($clickedDiv).attr("id") === "discDiv2") {
                    stagingDivArray.sort();
                    stagingDivArray.shift();
                    console.log("this is where you remove selected disc from discDiv2's array: " + stagingDivArray);

                } else if ($($clickedDiv).attr("id") === "discDiv3") {
                    targetDivArray.sort();
                    targetDivArray.shift();
                    console.log("this is where you remove selected disc from disDiv3's array: " + targetDivArray);

                }
                
//----------------  Set Conditionals after disc is selected to control moving selected disc (seletedDisc.lenth === 1) ----------

            } else if (selectedDisc.length === 1) {
                //checkForWin(targetDivArray, winningCompareArray);  /////move this if doesn't work
                    if ($($clickedDiv).attr("id") === "discDiv1") {

                        if (startDivArray[0] > selectedDisc[0] || startDivArray[0] == undefined) {
                            console.log($discToAppend);
                            $discToAppend.removeClass("selected");
                            $discToAppend.prependTo($clickedDiv);
                            startDivArray.push($($discToAppend).data("index"))
                            startDivArray.sort();
                            console.log("discDiv1's array => " + startDivArray);

                        } else {
                            $discToAppend.removeClass("selected");
                            selectedDisc = [];
                        }
                        
                    } else if ($($clickedDiv).attr("id") === "discDiv2") {

                        if (stagingDivArray[0] > selectedDisc[0] || stagingDivArray[0] == undefined) {
                            $discToAppend.removeClass("selected");
                            $discToAppend.prependTo($clickedDiv);
                            stagingDivArray.push($($discToAppend).data("index"));
                            stagingDivArray.sort();
                            console.log("discDiv2's array => " + stagingDivArray);
                        } else {
                            $discToAppend.removeClass("selected");
                            selectedDisc = [];
                        }

                    } else if ($($clickedDiv).attr("id") === "discDiv3") {

                        if (targetDivArray[0] > selectedDisc[0] || targetDivArray[0] == undefined) {
                            $discToAppend.removeClass("selected");
                            $discToAppend.prependTo($clickedDiv);
                            targetDivArray.push($($discToAppend).data("index"))
                            targetDivArray.sort();
                            console.log("disDiv3's array => " + targetDivArray);

                        } else {
                            $discToAppend.removeClass("selected");
                            selectedDisc = [];
                        }

                    } 
                checkForWin(targetDivArray, winningCompareArray);  /////move this if doesn't work
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

    function checkForWin(a, b) {
        console.log(a);
        let targ = a.sort();
        let win = b.sort();
        console.log(targ);
        console.log(a.length);
        if (targ.length === win.length) {
            for (let i = 0; i < b.length; i++) {
                if (a[i] === b[i]) {
                    game = true;

                } else {
                    game = false;
                }
            }
            game == true ? alert("You WIN!!") : null
        } else {
            game = false;
        }
    }
    

  









});