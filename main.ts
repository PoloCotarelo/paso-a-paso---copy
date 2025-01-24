let espera = 0
let fila = 0
let columna = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(11, 99))
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    espera = 50
    fila = 0
    columna = 0
    for (let index = 0; index < 25; index++) {
        led.toggle(fila, columna)
        for (let index = 0; index < 10; index++) {
            motor.stepperDegree_42(motor.Steppers.M1_M2, motor.Dir.CW, 180)
            basic.pause(espera)
            motor.stepperDegree_42(motor.Steppers.M1_M2, motor.Dir.CCW, 180)
            basic.pause(espera)
        }
        fila += 1
        if (fila == 5) {
            columna += 1
            fila = 0
        }
    }
})
