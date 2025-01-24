basic.forever(function () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 150)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 150)
    basic.pause(2000)
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 150)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 150)
    basic.pause(2000)
})
