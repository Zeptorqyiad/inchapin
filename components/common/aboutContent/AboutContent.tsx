import styles from "./AboutContent.module.scss"
import { VideoProject } from "@/components/common"

interface AboutContentProps {
    className?: string
}

export const AboutContent = ({ className }: AboutContentProps) => {
    return (
        <div className={`${styles.content} ${className || ""}`}>
            <span className={styles["content__line"]}></span>

            <p className={styles["content__title"]}>
                уютное и безопасное пространство для счастливой,
                <span>спокойной и размеренной жизни</span>
            </p>

            <p className={styles["content__description"]}>
                <span>Квартиры от 65 до 356 м2 с чистовой отделкой,</span>
                балконами, лоджиями и террасами В собственной ЗАКРЫТОЙ
                охраняемой территориИ.
            </p>

            <VideoProject />
        </div>
    )
}
