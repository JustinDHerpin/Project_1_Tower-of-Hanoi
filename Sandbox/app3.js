

$(() => {


    //-----------------  Declaring variables for global use  --------------------------
    
    let selectedDiscArray = [];
    let winningCompareArray = [1,2,3];
    let startDivArray = [1,2,3];
    let stagingDivArray = [];
    let targetDivArray = [];
    let game = false;
    let $divToMoveFrom = "";
    let $divToMoveTo = "";
    let isMoveLegal = false;
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


//---------------------  Function to close pop-ups once clicked:  --------------------------


    $(".close").click(() => {
        $(".modal").css("display", "none");
        $("#navBox").click(handleNavClick);
    });


//----------------------  Gameplay:  Set event listeners and control game play  ------------------------------------------------------

    
    function play() {
        
        $("#stacks .discDiv").on("click", firstClick)
        
        function firstClick(e) {
            //let $divToMoveFrom = e.delegateTarget;


    //---------------------  Conditionals to grab disc user selects and set variables needed for tracking and gameplay:  --------------------------


            if (selectedDiscArray.length === 0) {
                $divToMoveFrom = e.delegateTarget; 
                $discToAppend = $(e.delegateTarget).find(":first-child");
                $discToAppend.addClass("selected");
                selectedDiscArray.push($(e.delegateTarget).find(":first-child").data("index"));
                console.log("firstclick disc selected => " + selectedDiscArray);
                console.log(startDivArray);

                
        //----------------  Set Conditionals after disc is selected to control moving and tracking of selected disc (seletedDisc.lenth === 1) ----------



            } else if (selectedDiscArray.length === 1) {
                $divToMoveTo = e.delegateTarget;
                //isMoveLegal = false;
                console.log($divToMoveFrom);
                console.log($divToMoveTo);

            //  Reset disc if user selects same div to move to that is the same from which the disc originated

                if ($divToMoveFrom === $divToMoveTo) {

                    $discToAppend.removeClass("selected");
                    selectedDiscArray = [];

                } else {  
                
                //  ------------  Check if move is legal and set boolean to true or false, moves disc to new spot and new array,  removes disc from original array.//start here with "if they don't match up....."
                    
                    if ($($divToMoveTo).attr("id") === "discDiv1") {
                    
                        if (startDivArray[0] > selectedDiscArray[0] || startDivArray[0] == undefined) {
                            $discToAppend.removeClass("selected");
                            $discToAppend.prependTo($divToMoveTo);
                            startDivArray.push($($discToAppend).data("index"))
                            startDivArray.sort();
                            console.log("discDiv1's array => " + startDivArray);
                            isMoveLegal = true;

                        } else {
                            $discToAppend.removeClass("selected");
                            $discToAppend.prependTo($divToMoveFrom);
                            selectedDiscArray = [];
                            isMoveLegal = false;
                        }
                        
                    } else if ($($divToMoveTo).attr("id") === "discDiv2") {

                        if (stagingDivArray[0] > selectedDiscArray[0] || stagingDivArray[0] == undefined) {
                            $discToAppend.removeClass("selected");
                            $discToAppend.prependTo($divToMoveTo);
                            stagingDivArray.push($($discToAppend).data("index"));
                            stagingDivArray.sort();
                            console.log("discDiv2's array => " + stagingDivArray);
                            isMoveLegal = true;

                        } else {
                            $discToAppend.removeClass("selected");
                            $discToAppend.prependTo($divToMoveFrom);
                            selectedDiscArray = [];
                            isMoveLegal = false;
                        }

                    } //else next if goes back here as if else to restore.
                    if ($($divToMoveTo).attr("id") === "discDiv3") {

                        if (targetDivArray[0] > selectedDiscArray[0] || targetDivArray[0] == undefined) {
                            $discToAppend.removeClass("selected");
                            $discToAppend.prependTo($divToMoveTo);
                            targetDivArray.push($($discToAppend).data("index"))
                            targetDivArray.sort();
                            isMoveLegal = true;
                            console.log("discDiv3's array => " + targetDivArray);
                            console.log("discDiv1's array => " + startDivArray);

                        } else {
                            $discToAppend.removeClass("selected");
                            $discToAppend.prependTo($divToMoveFrom);
                            selectedDiscArray = [];
                            isMoveLegal = false;
                        }

                // ---------------- Update  game state arrays to remove disc from old position if move was legal (isMoveLegal === true)
                
                
                } else if (isMoveLegal === true) {

                    if ($($divToMoveFrom).attr("id") === "discDiv1") {
                        startDivArray.sort();
                        startDivArray.shift();
                        console.log("this is where you remove selected disc from discDiv1's array: " + startDivArray);

                    } else if ($($divToMoveFrom).attr("id") === "discDiv2") {
                        stagingDivArray.sort();
                        stagingDivArray.shift();
                        console.log("this is where you remove selected disc from discDiv2's array: " + stagingDivArray);

                    } else if ($($divToMoveFrom).attr("id") === "discDiv3") {
                        targetDivArray.sort();
                        targetDivArray.shift();

                        console.log("this is where you remove selected disc from disDiv3's array: " + targetDivArray);

                    }
            
                }
                isMoveLegal = false;

                checkForWin(targetDivArray, winningCompareArray);
                console.log("check win evoked here")
                selectedDiscArray = [];
                }
            }
        }
    }
                
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
            game == true ? alert("You WIN!!") : null;
        } else {
            game = false;
        }
    }


})
