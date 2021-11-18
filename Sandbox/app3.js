
} else if (selectedDiscArray.length === 1) {
    $divToMoveTo = e.delegateTarget
    console.log($divToMoveFrom);
    console.log($divToMoveTo);

    if ($divToMoveFrom === $divToMoveTo) {
        $discToAppend.removeClass("selected");
        selectedDiscArray = [];

    } else {
    
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
}

    