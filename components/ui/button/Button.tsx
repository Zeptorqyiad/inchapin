import React from "react"

import styles from "./Button.module.scss"
import { PhoneIcon } from "@/components/ui"

type ButtonVariant = "burger" | "text" | "outline"

/**
 * Компонент кнопки
 *
 * @param variant - Вариант стиля кнопки
 * @param text - Текст кнопки
 * @param onClick - Обработчик нажатия
 * @param loading - Показывает спиннер вместо содержимого
 * @param className
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant
    text: string
    onClick?: () => void
    loading?: boolean
    className?: string
}

export const Button = ({
    className,
    variant = "text",
    text,
    onClick,
    loading = false,
    disabled,
    ...props
}: ButtonProps) => {
    const isBtnDisabled = disabled || loading

    const buttonClasses = [
        styles.button,
        styles[variant],
        loading ? styles["button__loading"] : "",
        className || "",
    ]
        .filter(Boolean)
        .join(" ")
        .trim()

    return (
        <button
            className={buttonClasses}
            onClick={onClick}
            {...props}
            disabled={isBtnDisabled}
        >
            {variant === "burger" && (
                <div className={styles["button__burger"]}>
                    <div className={styles["button__burger_lines"]}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <p>{text}</p>
                </div>
            )}

            {loading ? (
                <span className={styles["button__spinner"]}></span>
            ) : (
                variant === "outline" && text
            )}

            {variant === "text" && (
                <>
                    <p className={styles["text__full"]}>{text}</p>

                    <PhoneIcon className={styles["text__mob"]} />
                </>
            )}
        </button>
    )
}
