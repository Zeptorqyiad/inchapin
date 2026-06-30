import styles from "./AnimatedPhone.module.scss"

interface AnimatedPhoneProps {
    phone: string
    href: string
    className?: string
}

export const AnimatedPhone = ({
    phone,
    href,
    className,
}: AnimatedPhoneProps) => {
    return (
        <a href={href} className={`${styles["phone_link"]} ${className || ""}`}>
            <span className={styles["phone_wrapper"]} data-text={phone}>
                {phone}
            </span>
        </a>
    )
}
