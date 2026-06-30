import Link from "next/link"
import Image from "next/image"

import styles from "./Logotype.module.scss"

interface LogotypeProps {
    className?: string
}

export const Logotype = ({ className }: LogotypeProps) => {
    return (
        <Link href="/" className={`${styles.logotype} ${className || ""}`}>
            <Image
                src="/logotype.png"
                alt="logotype"
                width={187}
                height={30}
                loading="eager"
            />
        </Link>
    )
}
