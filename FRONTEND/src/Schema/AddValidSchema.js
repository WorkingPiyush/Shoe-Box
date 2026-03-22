import { z } from "zod";
export const AddValidSchema = z.object({
    label: z.string().trim().min(2, "Label is required"),
    name: z.string().trim().min(2, "Name is required").regex(/^[A-Za-z\s]+$/, "Only letters allowed"),
    phone: z.string().trim().regex(/^\d{10}$/, "Phone must be 10 digits"),
    house: z.string().trim().min(3, "Address required").max(120, "Max 120 characters"),
    locality: z.string().trim().min(2, "Locality required"),
    city: z.string().trim().min(2, "City required"),
    state: z.string().trim().min(2, "State required"),
    pincode: z.string().trim().regex(/^\d{6}$/, "Pincode must be 6 digits"),
    country: z.string().trim().min(2, "Country required"),
    isDefault: z.boolean().optional(),
})