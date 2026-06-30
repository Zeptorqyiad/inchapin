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
        })

        window.mainScrollbar = scrollbar

        return () => {
            if (scrollbar) scrollbar.destroy()
            window.mainScrollbar = null
        }
    }, [])

    return (
        <div ref={scrollContainerRef} className={styles.scroll}>
            {children}
        </div>
    )
}
