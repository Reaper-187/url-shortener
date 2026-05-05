import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "@/components/ui/input-group";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link2 } from "lucide-react";
import { formSchema } from "@/types/url.types";

type FormValues = z.infer<typeof formSchema>;

export const NewLink = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      originalUrl: "",
      customSlug: "",
      generateQrCode: false,
    },
  });

  function onSubmit(data: FormValues) {
    toast("Link wurde erstellt!");
    console.log(data);
    form.reset();
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Link2 className="h-5 w-5 text-primary" />
            Neuen Link erstellen
          </CardTitle>
          <CardDescription>
            Verkürzen Sie Ihre lange URL und erstellen Sie einen QR-Code
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form id="new-link-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="name">
                      Name <span className="text-destructive">*</span>
                    </FieldLabel>
                    <Input
                      {...field}
                      id="name"
                      aria-invalid={fieldState.invalid}
                      placeholder="z.B. YouTube-URL, My Blog, ..."
                      autoComplete="off"
                    />
                    <FieldDescription>
                      Einprägsamer Name für deinen Link
                    </FieldDescription>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="originalUrl"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="original-url">
                      Original URL <span className="text-destructive">*</span>
                    </FieldLabel>
                    <Input
                      {...field}
                      id="original-url"
                      aria-invalid={fieldState.invalid}
                      placeholder="https://my-long-url.com/..."
                      autoComplete="off"
                      className="h-11"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="customSlug"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="custom-slug">
                      Custom Slug (optional)
                    </FieldLabel>
                    <InputGroup>
                      <InputGroupAddon align="block-start">
                        <InputGroupText>short.xyz/</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        {...field}
                        id="custom-slug"
                        placeholder="mein-link"
                        aria-invalid={fieldState.invalid}
                      />
                    </InputGroup>
                    <FieldDescription>
                      3-20 Zeichen, erlaubt: Buchstaben, Zahlen, - und _
                    </FieldDescription>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="generateQrCode"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>QR-Code generieren?</FieldLabel>
                    <RadioGroup
                      value={field.value ? "yes" : "no"}
                      onValueChange={(value) => field.onChange(value === "yes")}
                      className="flex gap-4 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="qr-yes" />
                        <label
                          htmlFor="qr-yes"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          Ja
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="qr-no" />
                        <label
                          htmlFor="qr-no"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          Nein
                        </label>
                      </div>
                    </RadioGroup>
                    <FieldDescription>
                      Bei "Ja" wird automatisch ein QR-Code für deinen Link
                      generiert
                    </FieldDescription>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between gap-3">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Zurücksetzen
          </Button>
          <Button type="submit" form="new-link-form" className="gap-2">
            Link erstellen
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
