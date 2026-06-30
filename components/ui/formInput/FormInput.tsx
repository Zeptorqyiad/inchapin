"use client"

import React from "react"
import { Controller } from "react-hook-form"
import type { Control, FieldValues, Path } from "react-hook-form"
import { PatternFormat } from "react-number-format"

import styles from "./FormInput.module.scss"

/**
 * Управляемое поле ввода для react-hook-form
 *
 * @param name - Имя поля
 * @param control - Контроль из react-hook-form
 * @param label - Текст лейбла
 * @param isPhone - Включатель маски через react-number-format
 * @param error - Текст ошибки
 */
interface InputProps<T extends FieldValues> {
    name: Path<T>
    control: Control<T>
    label: string
    isPhone?: boolean
    error?: string
}

export const FormInput = <T extends FieldValues>({
    name,
    control,
    label,
    isPhone,
    error,
}: InputProps<T>) => {
    const [isFocused, setIsFocused] = React.useState(false)

    return (
        <div className={styles.wrapper}>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, name, value, onBlur } }) => {
                    const commonProps = {
                        id: name,
                        name,
                        value: value ?? "",
                        onChange,
                        placeholder: " ",
                        className: styles.input,
                    }

                    return isPhone ? (
                        <PatternFormat
                            {...commonProps}
                            format="+7 (###) ###-##-##"
                            mask="_"
                            allowEmptyFormatting={isFocused}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => {
                                setIsFocused(false)
                                onBlur()
                            }}
                        />
                    ) : (
                        <input
                            {...commonProps}
                            type={name === "email" ? "email" : "text"}
                        />
                    )
                }}
            />

            <label htmlFor={name} className={styles["input__label"]}>
                {label}
            </label>

            {error && <span className={styles["input__error"]}>{error}</span>}
        </div>
    )
}
