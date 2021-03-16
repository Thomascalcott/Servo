let ticks = 0
pins.digitalWritePin(DigitalPin.P1, 1)
servos.P0.setRange(0, 180)
servos.P0.setAngle(90)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) < 200) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            . # # # .
            # . . . #
            `)
        servos.P0.setAngle(100 + ticks)
        ticks += 1
        for (let index = 0; index < 4; index++) {
            basic.pause(5000)
        }
    } else if (pins.analogReadPin(AnalogPin.P1) > 550) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . # # # .
            . # # # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            `)
        servos.P0.setAngle(90)
    }
})
