import Scrollbar from "smooth-scrollbar"

declare global {
    interface Window {
        mainScrollbar: Scrollbar | null
    }
}
