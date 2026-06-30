"use client"

import Link from "next/link"

import styles from "./Form.module.scss"
import { Button, FormInput } from "@/components/ui"
import { useCheckoutForm } from "@/shared/hooks"

interface FormProps {
    className?: string
}

export const Form = ({ className }: FormProps) => {
    const { control, handleSubmit, errors, isSubmitting, onSubmit } =
        useCheckoutForm()

    return (
        <div className={`${styles.form} ${className || ""}`}>
            <h2 className={styles["form__title"]}>Заказать звонок</h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles["form__form"]}
            >
                <div className={styles["form__inputs"]}>
                    <FormInput
                        name="name"
                        control={control}
                        label="ваше имя"
                        error={errors.name?.message}
                    />

                    <FormInput
                        name="phone"
                        control={control}
                        label="телефон"
                        isPhone={true}
                        error={errors.phone?.message}
                    />

                    <FormInput
                        name="email"
                        control={control}
                        label="e-mail"
                        error={errors.email?.message}
                    />
                </div>

                <p className={styles["form__policy"]}>
                    Нажимая на кнопку «Отправить», вы ознакомлены и
                    подтверждаете согласие с{" "}
                    <Link
                        href="/policy"
                        style={{
                            textDecoration: "underline",
                        }}
                    >
                        политикой обработки персональных данных
                    </Link>
                </p>

                <Button
                    className={styles["form__button"]}
                    text="Отправить"
                    variant="outline"
                    type="submit"
                    disabled={isSubmitting}
                    loading={isSubmitting}
                />
            </form>
        </div>
    )
}
