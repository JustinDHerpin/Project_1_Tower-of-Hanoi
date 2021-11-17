if($(e.target).attr("id") === "rules") {
    $("#rulesBox").css("display", "block");
    //                                                  $("#navBox").off("click");  attempting to 
   
} else if($(e.target).attr("id") === "story") {
    $("#storyBox").css("display", "block");

} else if($(e.target).attr("id") === "play") {
    $(".disc").css("display", "block");
//                                                                  test();
};



function selectDisc() {
    change color of div to purple

}

function moveDisc() {
    discDivToAppendTo.prepend(discDivtomove)
    update discDiv arrays
}

function checkMove() {
    
    if (discDivToAppendTo < selectedDisc[0].data("id")) {
        execute move 

    } else {
        dont execute move
    }

}



//-------------------------------    before changing: 11/15/21   -------------------------------------->

function firstClick(e) {
    console.log(e.target);
    console.log(e.delegateTarget);
    //let clickedDiv = e.target;
    //console.log(clickedDiv);
    // console.log($(e.target).find(":first-child"));
    // $(e.target).find(":first-child").css("background-color", "purple");
    // console.log(clickedDiv);
    // selectedDisc = [$(e.target.firstchild)]
    // $(selectedDisc).css("background-color", "purple");
    // console.log(clickedDiv);
    // console.log(selectedDisc)

    if (selectedDisc.length === 0) {
        if($(e.target).classlist.contains(discDiv)) {
            $discToAppend = $(e.target).find(":first-child");
            $discToAppend.addClass("selected");
            //$discToAppend.css("background-color", "purple");

        } else {
            $discToAppend = $(e.target)
            $discToAppend.css("background-color", "purple");
            $discToAppend.addClass("selected");
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

//-------------------------------    f() Play() Before Changing/Clean Up: 11/16/21   -------------------------------------->

function play() {
        
    $("#stacks .discDiv").on("click", firstClick)
    
    function firstClick(e) {
        console.log(e.target);
        console.log(e.delegateTarget);
        let $clickedDiv = e.delegateTarget;
        // console.log($clickedDiv);
        // console.log($(e.target).find(":first-child"));
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
//                                                                  $(e.target).find(":first-child").css("background-color", "purple");
                selectedDisc.push($(e.delegateTarget).find(":first-child").data("index"));
//                    console.log(selectedDisc);
            

        } else if(selectedDisc.length === 1) {

                $discToAppend.removeClass("selected");
                $discToAppend.prependTo($clickedDiv);
//                    selectedDisc = [];

                if($($clickedDiv).attr("id") === "discDiv2") {
                    stagingDivArray.push($($discToAppend).data("index"))

                    console.log("this is where you update discDiv2's array: " + stagingDivArray);


                } else if($($clickedDiv).attr("id") === "discDiv3") {
                    targetDivArray.push($($discToAppend).data("index"))
                    console.log("this is where you update disDiv3's array: " + targetDivArray);

                } else if($($clickedDiv).attr("id") === "discDiv1") {
                    startDivArray.push($($discToAppend).data("index"))
                    console.log("this is where you update disDiv1's array: " + startDivArray);
                }

                selectedDisc = [];

        
        } else if  (targetDivArray.length === winningCompareArray.length){
        //                                                  alert("You Won!!!  Great JOB!")
        console.log(selectedDisc[0]);
        }
        

       
    };




};

