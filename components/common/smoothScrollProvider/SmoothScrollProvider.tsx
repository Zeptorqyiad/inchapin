"use client"

import React, { useEffect, useRef } from "react"
import Scrollbar from "smooth-scrollbar"

import { LockScrollPlugin } from "@/shared/lib"
import styles from "./SmoothScrollProvider.module.scss"

Scrollbar.use(LockScrollPlugin)

interface SmoothScrollProps {
    children: React.ReactNode
}

export const SmoothScrollProvider = ({ children }: SmoothScrollProps) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const container = scrollContainerRef.current
        if (!container) return

        const scrollbar = Scrollbar.init(container, {
            damping: 0.07,
            alwaysShowTracks: false,
            renderByPixels: true,
            continuousScrolling: true,
            delegateTo: document,
        })

        const updateContentSize = () => {
            const viewport = container.querySelector(".scroll-content")
            if (viewport) {
                const content = viewport.firstChild as HTMLElement
                if (content) {
                    const safeAreaBottom =
                        parseInt(
                            getComputedStyle(
                                document.documentElement,
                            ).getPropertyValue("env(safe-area-inset-bottom)"),
                        ) || 0

                    content.style.minHeight = `calc(100vh - ${safeAreaBottom}px)`
                    scrollbar.update()
                }
            }
        }

        updateContentSize()

        const resizeObserver = new ResizeObserver(() => {
            updateContentSize()
        })

        if (container) {
            resizeObserver.observe(container)
        }

        window.mainScrollbar = scrollbar

        const preventIOSBounce = (e: TouchEvent) => {
            if (
                e.target === container ||
                container.contains(e.target as Node)
            ) {
                e.preventDefault()
            }
        }

        document.addEventListener("touchmove", preventIOSBounce, {
            passive: false,
        })

        return () => {
            if (scrollbar) scrollbar.destroy()
            window.mainScrollbar = null
            resizeObserver.disconnect()
            document.removeEventListener("touchmove", preventIOSBounce)
        }
    }, [])

    return (
        <div ref={scrollContainerRef} className={styles.scroll} data-scrollbar>
            <div className="scroll-content">{children}</div>
        </div>
    )
}
