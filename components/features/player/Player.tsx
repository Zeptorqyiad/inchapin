"use client"

import React from "react"
import Image from "next/image"

import ImageLink from "@/public/images/player-preview.webp"
import { VideoTheater } from "@/components/features"
import styles from "./Player.module.scss"

interface PlayerProps {
    className?: string
}

export const Player = ({ className }: PlayerProps) => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <>
            <div
                className={`${styles.player} ${className || ""}`}
                onClick={() => setIsOpen(true)}
            >
                <Image
                    src={ImageLink}
                    className={styles["player__bg-image"]}
                    alt="playerImage"
                />

                <span className={styles["player__circle"]}></span>

                <div className={styles["player__control"]}>
                    <svg
                        width="9"
                        height="10"
                        viewBox="0 0 9 10"
                        fill="none"
                        xmlns="http://w3.org"
                    >
                        <path
                            d="M8.40688 3.93433C9.09766 4.31426 9.09766 5.30684 8.40688 5.68676L1.48192 9.49549C0.815465 9.86204 4.27037e-08 9.37988 7.7604e-08 8.61928L4.27131e-07 1.00182C4.62031e-07 0.241215 0.815467 -0.240947 1.48192 0.125602L8.40688 3.93433Z"
                            fill="white"
                        />
                    </svg>
                    <span className={styles["player__control_text"]}>PLAY</span>
                </div>
            </div>

            <VideoTheater
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                videoSrc="/video/sea.mp4"
            />
        </>
    )
}
