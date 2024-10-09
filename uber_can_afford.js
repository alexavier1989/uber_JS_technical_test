// Excersice No.2 :  Most expensive Uber you can afford Solution

function solution_1 (l, fares, credit) {
    const uberOffers = ["UberX", "UberXL", "UberPlus", "UberBlack","UberSUV"]
    let result
    fares.forEach((fare, index) => {
        if(fare * l <= credit && index >= 0){
            result = uberOffers[index]
        }
    });
   console.log(result);
   
    return result == undefined ?  uberOffers[0] : result
}

function solution_2 (l, fares, credit) {
    const uberOffers = ["UberX", "UberXL", "UberPlus", "UberBlack","UberSUV"]

    const position = fares.findIndex(fare => {
        return fare * l > credit
    })

    return position < 0 ? uberOffers.flat(-1) : uberOffers[position - 1 ]

}

const l = 30
const fares = [0.3, 0.5, 0.7, 1, 1.3]
const credit = 104

solution_2(l, fares, credit)