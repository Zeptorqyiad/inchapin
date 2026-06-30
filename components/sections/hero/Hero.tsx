import Image from "next/image"

import { Container, HeroContent } from "@/components"
import styles from "./Hero.module.scss"
import heroImage from "@/public/images/hero-photo.webp"

interface HeroProps {
    className?: string
}

export const Hero = ({ className }: HeroProps) => {
    return (
        <section className={`${styles.hero} ${className || ""} `}>
            <Container className={styles["hero__container"]}>
                <div className={styles["hero__top"]}>
                    <Image
                        src={heroImage}
                        placeholder="blur"
                        fill
                        alt="heroImage"
                        draggable={false}
                    />
                </div>

                <HeroContent />
            </Container>
        </section>
    )
}
