import React from "react"

import styles from "./Container.module.scss"

interface Props {
    className?: string
    children: React.ReactNode
    as?: React.ElementType
}

export const Container = ({
    children,
    className = "",
    as: Component = "div",
}: Props) => {
    return (
        <Component className={`${styles.container} ${className}`}>
            {children}
        </Component>
    )
}
