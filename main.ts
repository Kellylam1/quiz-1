let TempF = input.temperature() * (1.8 + 32)
basic.forever(function () {
    while (TempF < 85) {
        if ((0 as any) > (75 as any)) {
            basic.showIcon(IconNames.Asleep)
        } else if (TempF > 80) {
            basic.showIcon(IconNames.Sad)
        } else {
            basic.showIcon(IconNames.Happy)
        }
        TempF = input.temperature() * (1.8 + 32)
    }
    basic.showString("To Hot!")
})
