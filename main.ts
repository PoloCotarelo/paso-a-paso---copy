input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 2; index++) {
        motor.stepperDegree_42(motor.Steppers.M1_M2, motor.Dir.CW, 90)
        basic.pause(espera)
        motor.stepperDegree_42(motor.Steppers.M1_M2, motor.Dir.CCW, 90)
        basic.pause(espera)
    }
})
input.onButtonPressed(Button.A, function () {
    if (juego == 0) {
        objetivo = randint(11, 99)
    }
    basic.showNumber(objetivo)
})
input.onButtonPressed(Button.B, function () {
    if (juego == 0) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        juego = 1
        espera = 45
        fila = 0
        columna = 0
        for (let index = 0; index < 25; index++) {
            for (let index = 0; index < 2; index++) {
                motor.stepperDegree_42(motor.Steppers.M1_M2, motor.Dir.CW, 180)
                basic.pause(espera)
                motor.stepperDegree_42(motor.Steppers.M1_M2, motor.Dir.CCW, 180)
                basic.pause(espera)
            }
            led.toggle(fila, columna)
            fila += 1
            if (fila == 5) {
                columna += 1
                fila = 0
            }
            if (fila == 4 && columna > 1) {
                music.ringTone(262)
            }
        }
        motor.motorStopAll()
        music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.UntilDone)
        juego = 0
    }
})
let columna = 0
let fila = 0
let objetivo = 0
let espera = 0
let juego = 0
motor.motorStopAll()
juego = 0
