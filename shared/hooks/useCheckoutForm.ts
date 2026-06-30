import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import {
    checkoutFormSchema,
    CheckoutFormValues,
} from "@/shared/constants/form-schema"

export const useCheckoutForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<CheckoutFormValues>({
        resolver: zodResolver(checkoutFormSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
        },
        mode: "onBlur",
    })

    const onSubmit = async (data: CheckoutFormValues) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000))

            const formData = new FormData()
            formData.append("name", data.name)
            formData.append("phone", data.phone.replace(/\D/g, ""))
            formData.append("email", data.email)

            console.log("--- FormData submitted ---")
            formData.forEach((value, key) => console.log(`${key}: ${value}`))

            reset()
            return { success: true }
        } catch (error) {
            console.error(error)
            return { success: false, error }
        }
    }

    return {
        control,
        handleSubmit,
        errors,
        isSubmitting,
        onSubmit,
    }
}
