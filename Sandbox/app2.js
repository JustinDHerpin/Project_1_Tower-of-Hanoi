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
                //let $clickedDiv = e.delegateTarget;
    
    
        //---------------------  Conditionals to select and move discs:  --------------------------
    
    
                if (selectedDisc.length === 0) {
                    let $clickedDiv = e.delegateTarget; // moved here from line 54 for test11/18 11am
                    $discToAppend = $(e.delegateTarget).find(":first-child");
                    $discToAppend.addClass("selected");
                    selectedDisc.push($(e.delegateTarget).find(":first-child").data("index"));
                    console.log("firstclick disc selected => " + selectedDisc);
    
    
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
                    let $divToMoveTo = e.delegateTarget
                    
                        if ($($clickedDiv).attr("id") === "discDiv1") {
    
                            if (startDivArray[0] > selectedDisc[0] || startDivArray[0] == undefined) {
                                console.log($discToAppend);
                                console.log(startDivArray);
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
                    checkForWin(targetDivArray, winningCompareArray);
                    console.log("check win evoked here")
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



    //  Pre change: 112/18/21 1:53pm

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
                    //let $divToMoveFrom = e.delegateTarget;
        
        
            //---------------------  Conditionals to select and move discs:  --------------------------
        
        
                    if (selectedDiscArray.length === 0) {
                        $divToMoveFrom = e.delegateTarget; // moved here from line 54 for test11/18 11am
                        $discToAppend = $(e.delegateTarget).find(":first-child");
                        $discToAppend.addClass("selected");
                        selectedDiscArray.push($(e.delegateTarget).find(":first-child").data("index"));
                        console.log("firstclick disc selected => " + selectedDiscArray);
                        console.log(startDivArray);
        
        
        //----------------  Set Conditionals to remove selected disc from current array for tracking of moves  ----------  
        
                        // if ($($divToMoveFrom).attr("id") === "discDiv1") {
                        //     startDivArray.sort();
                        //     startDivArray.shift();
                        //     console.log("this is where you remove selected disc from discDiv1's array: " + startDivArray);
        
                        // } else if ($($divToMoveFrom).attr("id") === "discDiv2") {
                        //     stagingDivArray.sort();
                        //     stagingDivArray.shift();
                        //     console.log("this is where you remove selected disc from discDiv2's array: " + stagingDivArray);
        
                        // } else if ($($divToMoveFrom).attr("id") === "discDiv3") {
                        //     targetDivArray.sort();
                        //     targetDivArray.shift();
        
                        //     console.log("this is where you remove selected disc from disDiv3's array: " + targetDivArray);
        
                        // }
                        
        //----------------  Set Conditionals after disc is selected to control moving selected disc (seletedDisc.lenth === 1) ----------
        
                    } else if (selectedDiscArray.length === 1) {
                        $divToMoveTo = e.delegateTarget
                        console.log($divToMoveFrom);
                        console.log($divToMoveTo);
        
                            if ($divToMoveFrom === $divToMoveTo){
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
                                
                                console.log(`$divToMoveFrom === $divToMoveTo`);
        
                            } else {
        
        
                                if ($($divToMoveTo).attr("id") === "discDiv1") {
        
                                    if (startDivArray[0] > selectedDiscArray[0] || startDivArray[0] == undefined) {
                                        //console.log($discToAppend);
                                        //console.log(startDivArray);
                                        $discToAppend.removeClass("selected");
                                        $discToAppend.prependTo($divToMoveTo);
                                        startDivArray.push($($discToAppend).data("index"))
                                        startDivArray.sort();
                                        console.log("discDiv1's array => " + startDivArray);
        
                                    } else {
                                        $discToAppend.removeClass("selected");
                                        $discToAppend.prependTo($divToMoveFrom);
                                        selectedDiscArray = [];
                                    }
                                    
                                } else if ($($divToMoveTo).attr("id") === "discDiv2") {
        
                                    if (stagingDivArray[0] > selectedDiscArray[0] || stagingDivArray[0] == undefined) {
                                        $discToAppend.removeClass("selected");
                                        $discToAppend.prependTo($divToMoveTo);
                                        stagingDivArray.push($($discToAppend).data("index"));
                                        stagingDivArray.sort();
                                        console.log("discDiv2's array => " + stagingDivArray);
                                    } else {
                                        $discToAppend.removeClass("selected");
                                        $discToAppend.prependTo($divToMoveFrom);
                                        selectedDiscArray = [];
                                    }
        
                                } else if ($($divToMoveTo).attr("id") === "discDiv3") {
        
                                    if (targetDivArray[0] > selectedDiscArray[0] || targetDivArray[0] == undefined) {
                                        $discToAppend.removeClass("selected");
                                        $discToAppend.prependTo($divToMoveTo);
                                        targetDivArray.push($($discToAppend).data("index"))
                                        targetDivArray.sort();
                                        console.log("disDiv3's array => " + targetDivArray);
                                        console.log("disDiv3's array => " + startDivArray);
        
                                    } else {
                                        $discToAppend.removeClass("selected");
                                        $discToAppend.prependTo($divToMoveFrom);
                                        selectedDiscArray = [];
                                    }
        
                                } 
                            }
                        checkForWin(targetDivArray, winningCompareArray);
                        console.log("check win evoked here")
                        selectedDiscArray = [];
        
                    
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