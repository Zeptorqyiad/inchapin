"use client"

import { useEscapeKey, useLockBodyScroll } from "@/shared/hooks"
import styles from "./BurgerMenu.module.scss"

interface BurgerMenuProps {
    isOpen: boolean
    onClose: () => void
}

export const BurgerMenu = ({ isOpen, onClose }: BurgerMenuProps) => {
    useEscapeKey(onClose, isOpen)
    useLockBodyScroll(isOpen)

    return (
        <div
            className={`${styles["burder-menu"]} ${isOpen ? styles.open : ""}`}
            onClick={onClose}
        >
            <button className={styles["burger-menu__close"]} onClick={onClose}>
                ✕
            </button>

            <div
                className={styles["burger-menu__menu"]}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles["burger-menu__content"]}></div>
            </div>
        </div>
    )
}
