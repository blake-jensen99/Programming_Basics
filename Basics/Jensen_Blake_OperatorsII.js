var slicesOfCake = []
var numberOfPeople = []
function howMuchLeftOverCake(slicesOfCake, numberOfPeople) {
    var remainingNumberOfSlices = slicesOfCake % numberOfPeople
    if (remainingNumberOfSlices == 0) {
        console.log("No leftovers for you!");
    }
    else if (remainingNumberOfSlices <= 2) {
        console.log("You have some leftovers.");
    }
    else if (3 <= remainingNumberOfSlices && remainingNumberOfSlices <= 5) {
        console.log("You have leftovers to share.");
    }
    else if (remainingNumberOfSlices > 6) {
        console.log("Have another party!");
    }
    return remainingNumberOfSlices
}
howMuchLeftOverCake(23, 7)