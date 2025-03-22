function Muestra () {
    while (!(input.logoIsPressed())) {
        basic.showNumber(objetivo)
    }
}
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
        col = 0
        fil = 0
        for (let index = 0; index < 25; index++) {
            for (let index = 0; index < 2; index++) {
                motor.stepperDegree_42(motor.Steppers.M1_M2, motor.Dir.CW, 180)
                basic.pause(espera)
                motor.stepperDegree_42(motor.Steppers.M1_M2, motor.Dir.CCW, 180)
                basic.pause(espera)
            }
            led.toggle(fil, col)
            col += 1
            if (col == 5) {
                fil += 1
                col = 0
            }
            if (fil == 4 && col > 1) {
                music.play(music.tonePlayable(262, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            }
        }
        motor.motorStopAll()
        music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.UntilDone)
        juego = 0
        Muestra()
    }
})
let fil = 0
let col = 0
let espera = 0
let objetivo = 0
let juego = 0
motor.motorStopAll()
juego = 0
