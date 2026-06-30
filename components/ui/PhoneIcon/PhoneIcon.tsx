import styles from "./PhoneIcon.module.scss"

interface ModalIconProps {
    className?: string
}

export const PhoneIcon = ({ className }: ModalIconProps) => {
    return (
        <div className={`${styles.modal_content} ${className || ""}`}>
            <img
                className={styles.icon}
                src="./phone.svg"
                alt="phoneIcon"
                width={14}
                height={14}
            />
        </div>
    )
}
