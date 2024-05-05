
class SwipeCheckService{
    touchStartY = 0
    touchEndY=0

    setTouchStartY(touchStartY: number) {
        this.touchStartY = touchStartY
        this.touchEndY = 0
    }
    setTouchEndY(touchEndY: number) {
        this.touchEndY = touchEndY
    }

    compareStartWithEnd(): boolean {
        return this.touchStartY < this.touchEndY
    }
}

export const swipeCheckService = new SwipeCheckService()