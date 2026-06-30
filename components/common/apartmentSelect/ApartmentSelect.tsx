"use client"

import React from "react"
import Select, { components } from "react-select"

import styles from "./ApartmentSelect.module.scss"
import { ApartmentOption } from "@/shared/constants/apartment"

/**
 * Компонент выпадающего списка с выбором квартир
 *
 * @param options - Массив доступных для выбора квартир
 * @param placeholder - placeholder по умолчанию: "Выборать квартиру"
 * @param onChange - Callback вызываемый при выборе квартир
 */

interface ApartmentSelectProps {
    options: readonly ApartmentOption[]
    placeholder?: string
    onChange?: (option: ApartmentOption | null) => void
    className?: string
}

export const ApartmentSelect = ({
    options,
    placeholder = "Выбрать квартиру",
    onChange,
    className,
}: ApartmentSelectProps) => {
    return (
        <Select
            options={options}
            placeholder={placeholder}
            onChange={onChange}
            instanceId="apartment-select"
            className={className || ""}
            isSearchable={false}
            unstyled
            components={{
                Placeholder: (props) => (
                    <components.Placeholder {...props}>
                        <span
                            className={styles["placeholder_animated"]}
                            data-text={props.children}
                        >
                            {props.children}
                        </span>
                    </components.Placeholder>
                ),
            }}
            classNames={{
                control: () => styles["control"],
                valueContainer: () => styles["value_container"],
                indicatorsContainer: () => styles["indicators_container"],
                dropdownIndicator: () => styles["dropdown_indicator"],
                menu: () => styles["menu"],
                menuList: () => styles["menu__list"],
                option: ({ isSelected, isFocused }) =>
                    `${styles["option"]} ${isSelected ? styles["option__selected"] : ""} ${
                        isFocused && !isSelected
                            ? styles["option__focused"]
                            : ""
                    }`,
            }}
        />
    )
}
