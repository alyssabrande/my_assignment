input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Snake)
})
basic.showIcon(IconNames.Umbrella)
basic.forever(function () {
    music.playMelody("C5 B A G F E D C ", 120)
})
basic.forever(function () {
    music.setVolume(255)
})
