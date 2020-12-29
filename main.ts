basic.forever(function () {
    while (true) {
        basic.clearScreen()
        while (!(input.isGesture(Gesture.TiltLeft))) {
        	
        }
        basic.showNumber(1)
        while (!(input.isGesture(Gesture.TiltRight))) {
        	
        }
        basic.showNumber(2)
        while (!(input.isGesture(Gesture.ScreenDown))) {
        	
        }
        basic.showIcon(IconNames.Happy)
        soundExpression.spring.playUntilDone()
        while (!(input.buttonIsPressed(Button.A))) {
        	
        }
    }
})
