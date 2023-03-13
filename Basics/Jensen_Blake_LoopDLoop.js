//We need a loop because candy is being given every 2 miles during the six mile run
//The starting point is zero
//The loop will stop at 6
//The loop will know to stop when the variable reaches 6
//The distance ran is being incremented
//Distance is a variable and so is speed

// for (var distance = 0; distance <= 6; distance++) {
//     if (distance == 0) continue;
//     if (distance % 2 == 0) {
//         console.log('Runner gets candy at ' + distance + ' miles');
//     }
// }

// for (var speed = 0; speed <= 6; speed= speed+2) {
//     if (speed > 5.5) {
//         console.log('Runner gets candy')
//     }
// }

for (var speed = 0; speed <= 6; speed = speed + 2) {
    for (var distance = 0; distance <= 6; distance++) {
        if (speed > 5.5) {
            if (distance == 0) continue;
            if (distance % 2 == 0)
                console.log('Runner gets candy at ' + distance + ' miles and is running faster than 5.5 mph!');
        }
    }
}