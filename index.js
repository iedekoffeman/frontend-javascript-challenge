function calculateBMI  (bodyweight, length) {

    const lengthInMeters = length / 100;
    return Math.round(bodyweight / (lengthInMeters * lengthInMeters));
}
//console.log(calculateBMI(75,186));
module.exports = {
    calculateBMI: calculateBMI,
}