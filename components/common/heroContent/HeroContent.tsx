import Image from "next/image"
import styles from "./HeroContent.module.scss"

interface HeroContentProps {
    className?: string
}

export const HeroContent = ({ className }: HeroContentProps) => {
    return (
        <div className={`${styles.content} ${className || ""}`}>
            <p className={styles["content__text"]}>
                дом бизнес-класса <span>для любителей роскоши</span>
            </p>

            <Image
                src="inchapin.svg"
                alt="inchapinTitle"
                width={717}
                height={114}
                className={styles["content__svg"]}
            />
        </div>
    )
}
