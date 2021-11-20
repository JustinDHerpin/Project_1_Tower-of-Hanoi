$(() => {


//-----------------  Declaring variables for global use  --------------------------


    let selectedDisc = [];
    let winningCompareArray = [1,2,3];
    let startDivArray = [1,2,3];
    let stagingDivArray = [];
    let targetDivArray = [];
    let $divToMoveFrom = "";
    let gameOver = false;
    let $divToMoveTo = "";
    let arrayToMoveFrom = [];


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


//---------------------  Conditionals to select div to move from and disc to move:  --------------------------


            if (selectedDisc.length === 0) {
                $divToMoveFrom = e.delegateTarget;
                $discToAppend = $(e.delegateTarget).find(":first-child");
                $discToAppend.addClass("selected");
                selectedDisc.push($(e.delegateTarget).find(":first-child").data("index"));

//----------------  Set Conditionals to remove selected disc from current array for tracking of moves  ----------  

                if ($($divToMoveFrom).attr("id") === "discDiv1") {
                    arrayToMoveFrom = startDivArray;
                    startDivArray.sort();
                    startDivArray.shift();
                    console.log("this is where you remove selected disc from discDiv1's array: " + startDivArray);

                } else if ($($divToMoveFrom).attr("id") === "discDiv2") {
                    arrayToMoveFrom = stagingDivArray;
                    stagingDivArray.sort();
                    stagingDivArray.shift();
                    console.log("this is where you remove selected disc from discDiv2's array: " + stagingDivArray);

                } else if ($($divToMoveFrom).attr("id") === "discDiv3") {
                    arrayToMoveFrom = targetDivArray;
                    targetDivArray.sort();
                    targetDivArray.shift();
                    console.log("this is where you remove selected disc from disDiv3's array: " + targetDivArray);

                }
                
//----------------  Set Conditionals after disc is selected to control moving selected disc (seletedDisc.lenth === 1) ----------

            } else if (selectedDisc.length === 1) {
                $divToMoveTo = e.delegateTarget
                
//----------------  Check if move is legal, if allowed, move disc and update arrays, else return to state prior to selecting a disc to move.-------        

                    if ($($divToMoveTo).attr("id") === "discDiv1") {

                        if (startDivArray[0] > selectedDisc[0] || startDivArray[0] == undefined) {
                            console.log($discToAppend);
                            console.log(startDivArray);
                            $discToAppend.removeClass("selected");
                            $discToAppend.prependTo($divToMoveTo);
                            startDivArray.push($($discToAppend).data("index"))
                            startDivArray.sort();
                            console.log("discDiv1's array => " + startDivArray);

                        } else {
                            $discToAppend.removeClass("selected");
                            arrayToMoveFrom.push($($discToAppend).data("index"));
                            selectedDisc = [];
                        }
                        
                    } else if ($($divToMoveTo).attr("id") === "discDiv2") {

                        if (stagingDivArray[0] > selectedDisc[0] || stagingDivArray[0] == undefined) {
                            $discToAppend.removeClass("selected");
                            $discToAppend.prependTo($divToMoveTo);
                            stagingDivArray.push($($discToAppend).data("index"));
                            stagingDivArray.sort();
                            console.log("discDiv2's array => " + stagingDivArray);
                        } else {
                            $discToAppend.removeClass("selected");
                            arrayToMoveFrom.push($($discToAppend).data("index"));
                            selectedDisc = [];
                        }

                    } else if ($($divToMoveTo).attr("id") === "discDiv3") {

                        if (targetDivArray[0] > selectedDisc[0] || targetDivArray[0] == undefined) {
                            $discToAppend.removeClass("selected");
                            $discToAppend.prependTo($divToMoveTo);
                            targetDivArray.push($($discToAppend).data("index"))
                            targetDivArray.sort();
                            console.log("disDiv3's array => " + targetDivArray);

                        } else {
                            $discToAppend.removeClass("selected");
                            arrayToMoveFrom.push($($discToAppend).data("index"));
                            selectedDisc = [];
                        }

//----------------  Else if statements convert array data from arrayToMoveFrom back to game state arrays for tracking  --------------------

                    } else if ($($divToMoveFrom).attr("id") === "discDiv1") {
                        startDivArray = arrayToMoveFrom;
                        startDivArray.sort();
    
                    } else if ($($divToMoveFrom).attr("id") === "discDiv2") {
                        stagingDivArray = arrayToMoveFrom;
                        stagingtDivArray.sort();
    
                    } else if ($($divToMoveFrom).attr("id") === "discDiv3") {
                        targetDivArray = arrayToMoveFrom;
                        targetDivArray.sort();

    
                    }
                    
//----------------  Check for win after full cycle and make sure selected disc is reset for next cycle --------------------------------------------------------------------
                
                checkForWin(targetDivArray, winningCompareArray);
                selectedDisc = [];

            
            } 
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
                    gameOver = true;

                } else {
                    gameOver = false;
                }
            }
            gameOver == true ? alert("You WIN!!") : null
        } else {
            gameOver = false;
        }
    }
});