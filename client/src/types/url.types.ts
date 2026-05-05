import z from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(3, "Name muss mindestens 3 Zeichen lang sein")
    .max(50, "Name darf maximal 50 Zeichen lang sein"),
  originalUrl: z
    .string()
    .min(1, "URL ist erforderlich")
    .url("Bitte geben Sie eine gültige URL ein (https://...)"),
  customSlug: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[a-zA-Z0-9_-]{3,20}$/.test(val),
      "Slug muss 3-20 Zeichen lang sein und nur Buchstaben, Zahlen, - und _ enthalten",
    ),
  generateQrCode: z.boolean(),
});
