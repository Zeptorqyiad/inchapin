export interface ApartmentOption {
    value: string
    label: string
}

export const apartmentOptions: ApartmentOption[] = [
    { value: "1", label: "Квартира 1" },
    { value: "2", label: "Квартира 2" },
    { value: "3", label: "Квартира 3" },
] as const
