let xvalue = 0
let yvalue = 0
input.onButtonPressed(Button.A, function () {
    led.plot(xvalue, yvalue)
})
input.onButtonPressed(Button.AB, function () {
    led.toggle(3, 3)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(xvalue, yvalue)
})
input.onGesture(Gesture.Shake, function () {
    xvalue = randint(0, 4)
    yvalue = randint(0, 4)
})
