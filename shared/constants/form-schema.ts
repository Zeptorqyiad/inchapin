import { z } from "zod"

export const checkoutFormSchema = z.object({
    name: z.string().min(1, "Укажите ваше имя").max(50, "Имя слишком длинное"),
    phone: z
        .string()
        .min(1, "Телефон обязателен для заполнения")
        .refine((val) => {
            const digits = val.replace(/\D/g, "")
            return digits.length === 11
        }, "Введите номер телефона полностью"),
    email: z.email({ message: "Введите корректную почту" }),
})

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>
