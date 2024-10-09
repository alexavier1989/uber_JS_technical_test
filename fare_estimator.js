// Excersice No.1 : Fare Estimator Solution
// Formula: (Cost per minute)×(ride time)+(Cost per mile)×(ride distance)

function solution(rideTime,  rideDistance, costPerMinute, costPerMile) {
    const estimation = costPerMinute.map((costMinute, index) => {
        return (costMinute * rideTime + costPerMile[index] * rideDistance).toFixed(1)
    })   
    return estimation
}

const rideTime = 30
const rideDistance = 7
const costPerMinute = [0.2, 0.35, 0.4, 0.45]
const costPerMile = [1.1, 1.8, 2.3, 3.5]

solution(rideTime, rideDistance, costPerMinute, costPerMile);