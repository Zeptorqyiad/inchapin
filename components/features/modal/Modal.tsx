"use client"

import React, { useEffect, useState, useRef } from "react"
import { CSSTransition } from "react-transition-group"
import { useEscapeKey, useLockBodyScroll } from "@/shared/hooks"
import styles from "./Modal.module.scss"
import { Form } from "@/components/features"

/**
 * Модальное окно
 * Использую react-transition-group
 *
 * @param isOpen - видимость модального окна
 * @param onClose - fn закрытия модального окна
 * @param className
 */
interface ModalProps {
    isOpen: boolean
    onClose: () => void
    className?: string
}

export const Modal = ({ isOpen, onClose, className }: ModalProps) => {
    const nodeRef = useRef<HTMLDivElement>(null)
    const [show, setShow] = useState(false)

    useEscapeKey(onClose, isOpen)
    useLockBodyScroll(isOpen)

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => setShow(true), 10)
            return () => clearTimeout(timer)
        } else {
            setShow(false)
        }
    }, [isOpen])

    return (
        <CSSTransition
            in={show}
            timeout={300}
            classNames={{
                enter: styles.enter,
                enterActive: styles.enterActive,
                exit: styles.exit,
                exitActive: styles.exitActive,
                appear: styles.appear,
                appearActive: styles.appearActive,
            }}
            unmountOnExit
            nodeRef={nodeRef}
        >
            <div ref={nodeRef} className={`${styles.modal} ${className || ""}`}>
                <div className={styles.modal__content}>
                    <div className={styles.modal__close} onClick={onClose}>
                        <img src="/close.svg" alt="iconClose" />
                    </div>

                    <Form />
                </div>
            </div>
        </CSSTransition>
    )
}
