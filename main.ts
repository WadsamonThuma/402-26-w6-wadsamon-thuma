radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    basic.showIcon(IconNames.Heart)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("W")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(randint(5, 9))
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.showIcon(IconNames.Duck)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("T")
})
radio.setTransmitPower(1)
radio.setGroup(26)
basic.showIcon(IconNames.Asleep)
