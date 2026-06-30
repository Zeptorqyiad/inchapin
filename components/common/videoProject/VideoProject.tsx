import styles from "./VideoProject.module.scss"
import { Player } from "@/components/features"
import { VideoInfo } from "@/components/common"
import { Separator } from "@/components/ui"

interface VideoProjectProps {
    className?: string
}

export const VideoProject = ({ className }: VideoProjectProps) => {
    return (
        <div className={`${styles["video__content"]} ${className || ""}`}>
            <VideoInfo title="видео о проекте" duration="1:25 минут" />

            <Separator />

            <Player />
        </div>
    )
}
