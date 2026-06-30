import Image from "next/image"

import styles from "./CircleArrow.module.scss"
import ImageLink from "@/public/circle-arrow.svg"

interface CircleArrowProps {
    className?: string
}

export const CircleArrow = ({ className }: CircleArrowProps) => {
    return (
        <div className={`${styles.circle} ${className}`}>
            <Image
                className={styles["circle__arrow"]}
                src={ImageLink}
                alt="arrowTop"
                width={49}
                height={68}
            />
        </div>
    )
}
