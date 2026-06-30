import styles from "./About.module.scss"
import { AboutContent, AboutImage, Container } from "@/components/common"

interface AboutProps {
    className?: string
}

export const About = ({ className }: AboutProps) => {
    return (
        <section className={`${styles.about} ${className || ""}`}>
            <Container className={styles['about__container']}>
                <div className={styles["about__content"]}>
                    <AboutImage title="О проекте" />

                    <AboutContent />
                </div>
            </Container>
        </section>
    )
}
