import Image from "next/image"

import styles from "./AboutImage.module.scss"
import ImageLink from "@/public/images/about-photo.webp"
import { CircleArrow } from "@/components/common"

interface AboutImageProps {
    title: string
    className?: string
}

export const AboutImage = ({ title, className }: AboutImageProps) => {
    return (
        <div className={`${styles.content} ${className || ""}`}>
            <p className={styles["content__text"]}>{title}</p>

            <div className={styles["content__image_box"]}>
                <Image
                    className={styles["content__image"]}
                    src={ImageLink}
                    placeholder="blur"
                    width={567}
                    height={720}
                    alt="aboutImage"
                />

                <CircleArrow className={styles["content__flying"]} />
            </div>
        </div>
    )
}
