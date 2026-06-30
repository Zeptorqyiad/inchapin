"use client"

import React from "react"

import styles from "./Header.module.scss"
import { AnimatedPhone, Button } from "@/components/ui"
import { ApartmentSelect, Container, Logotype } from "@/components/common"
import { apartmentOptions } from "@/shared/constants/apartment"
import { BurgerMenu, Modal } from "@/components/features"

interface HeaderProps {
    phone?: string
    className?: string
}

export const Header = ({
    className,
    phone = "+7 495 527 21 21",
}: HeaderProps) => {
    const [modalOpen, setModalOpen] = React.useState(false)
    const [isBurgerOpen, setIsBurgerOpen] = React.useState(false)

    return (
        <header className={`${styles.header} ${className || ""}`}>
            <Container>
                <div className={styles["header__content"]}>
                    <div className={styles["header__leftside"]}>
                        <Button
                            variant="burger"
                            text="Меню"
                            onClick={() => setIsBurgerOpen(true)}
                        />

                        <BurgerMenu
                            isOpen={isBurgerOpen}
                            onClose={() => setIsBurgerOpen(false)}
                        />

                        <ApartmentSelect
                            className={styles["header__select--full"]}
                            options={apartmentOptions}
                        />
                    </div>

                    <Button
                        variant="text"
                        text="заказать звонок"
                        onClick={() => setModalOpen(true)}
                        className={styles["header__callback--mob"]}
                    />

                    <Logotype className={styles["header__logotype"]} />

                    <div className={styles["header__rightside"]}>
                        <AnimatedPhone
                            phone={phone}
                            href={`tel:${phone}`}
                            className={styles["header__phone"]}
                        />

                        <Button
                            variant="text"
                            text="заказать звонок"
                            onClick={() => setModalOpen(true)}
                            className={styles["header__callback"]}
                        />
                    </div>

                    <ApartmentSelect
                        className={styles["header__select--mob"]}
                        options={apartmentOptions}
                    />
                </div>

                <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
            </Container>
        </header>
    )
}
