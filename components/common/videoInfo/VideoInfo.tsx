import styles from "./VideoInfo.module.scss"

interface VideoInfoProps {
    title: string
    duration: string
    className?: string
}

export const VideoInfo = ({ title, duration, className }: VideoInfoProps) => {
    return (
        <div className={`${styles["video-info"]} ${className || ""}`}>
            <p className={styles["video-info__title"]}>{title}</p>

            <span className={styles["video-info__duration"]}>{duration}</span>
        </div>
    )
}
