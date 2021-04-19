const {calculateBMI} = require('../index');

test('The calculateBMI function takes your bodyweight in KG and length in cm and returns your bmi rounded', () => {

    //Arrange
    const bodyweight = 75;
    const length = 186;

    //Act
    const bmi = calculateBMI(bodyweight, length);

    //Assert
    expect(bmi).toBe(22);

});

