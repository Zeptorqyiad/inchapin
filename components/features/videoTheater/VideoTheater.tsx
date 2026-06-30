"use client"

import React from "react"
import { createPortal } from "react-dom"

import styles from "./VideoTheater.module.scss"
import { useEscapeKey, useLockBodyScroll } from "@/shared/hooks"

/**
 * Запуск видео-контента
 *
 * @param isOpen - видимость видео-контента
 * @param onClose - fn закрытия видео-контента
 * @param className
 */
interface VideoTheaterProps {
    isOpen: boolean
    onClose: () => void
    videoSrc: string
}

export const VideoTheater = ({
    isOpen,
    onClose,
    videoSrc,
}: VideoTheaterProps) => {
    const [mounted, setMounted] = React.useState(false)
    const videoRef = React.useRef<HTMLVideoElement>(null)

    useLockBodyScroll(isOpen)
    useEscapeKey(onClose, isOpen)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    React.useEffect(() => {
        if (isOpen && videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.log("[PlayerError]", error)
            })
        }
    }, [isOpen])

    if (!isOpen || !mounted) return null

    return createPortal(
        <div className={styles.overlay} onClick={onClose}>
            <video
                ref={videoRef}
                className={styles.video}
                src={videoSrc}
                controls
                playsInline
                onClick={(e) => e.stopPropagation()}
            />
        </div>,
        document.body,
    )
}
