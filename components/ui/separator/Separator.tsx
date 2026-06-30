import styles from "./Separator.module.scss"

/**
 * Разделитель для визуального отделения контента
 *
 * @param orientation - Ориентация разделителя
 * @param className
 * @returns {JSX.Element}
 */
interface SeparatorProps {
    orientation?: "horizontal" | "vertical"
    className?: string
}

export const Separator = ({
    orientation = "horizontal",
    className,
}: SeparatorProps) => {
    const orientationClass =
        orientation === "vertical" ? styles.vertical : styles.horizontal

    return (
        <div
            className={`${styles.separator} ${orientationClass} ${className || ""}`}
        ></div>
    )
}
