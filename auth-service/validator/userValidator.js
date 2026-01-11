import { z } from "zod"

const userValidator = z.object({
    username: z.string()
        .lowercase()
        .trim()
        .min(6, { message: "Username must have 6 characters" })
        .max(18, { message: "Username can only contain 18 characters" }),
    email: z.email()
        .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, { message: "Enter valid email address"})
        .trim()
        .lowercase(),
    password: z.string()
        .trim()
        .regex(/[A-Z]/,{ message: "Must contain at least one uppercase" })
        .regex(/[a-z]/,{ message: "Must contain at least one uppercase" })
        .regex(/[0-9]/,{ message: "Must contain at least one uppercase" })
        .regex(/[!@#$%^*&]/,{ message: "Must contain at least on special character"} )
})

export default userValidator;