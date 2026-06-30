import { ScrollbarPlugin } from "smooth-scrollbar"

export class LockScrollPlugin extends ScrollbarPlugin {
    static pluginName = "lockScroll"
    static defaultOptions = { isLocked: false }

    transformDelta(delta: { x: number; y: number }) {
        if (this.options.isLocked) {
            return { x: 0, y: 0 }
        }
        return delta
    }
}
