/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Murali Kothuri
 * Created on: Mar 2026
 * This program is traffic light program with neopixels.
*/

// variables
let neopixelStrip: neopixel.Strip = null

// cleanup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    // 1. green on
    neopixelStrip.setPixelColor(0, NeoPixelColors.Green)
    neopixelStrip.show()
    basic.pause(2000)

    // 2. green off, yellow On
    neopixelStrip.setPixelColor(0, NeoPixelColors.Black) // Turns Green off
    neopixelStrip.setPixelColor(1, NeoPixelColors.Yellow)
    neopixelStrip.show()
    basic.pause(2000)

    // 3. yellow off, red On
    neopixelStrip.setPixelColor(1, NeoPixelColors.Black) // Turns Yellow off
    neopixelStrip.setPixelColor(2, NeoPixelColors.Red)
    neopixelStrip.show()
    basic.pause(2000)

    // 4. turning red off
    neopixelStrip.setPixelColor(2, NeoPixelColors.Black) // This turns Red off
    neopixelStrip.show()
    basic.showIcon(IconNames.Happy)
})
