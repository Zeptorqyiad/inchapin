import { useEffect } from "react"

export const useLockBodyScroll = (isLocked: boolean) => {
    useEffect(() => {
        const scrollbar = window.mainScrollbar

        if (!scrollbar) return

        scrollbar.updatePluginOptions("lockScroll", { isLocked })
    }, [isLocked])
}
