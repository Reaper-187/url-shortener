import { generateQrCode } from "@/utils/generateQrCode";
import prisma from "../../lib/prisma";
import { AppError } from "@/utils/appError.utils";

interface LinkProps {
  link_name: string;
  original_url: string;
  custom_slug: string;
  generate_qr: boolean;
}
export async function createNewLink({
  link_name,
  original_url,
  custom_slug,
  generate_qr,
}: LinkProps) {
  const generatedSvg = generate_qr ? await generateQrCode(original_url) : null;

  const new_link = await prisma.shortUrl.create({
    data: {
      link_name: link_name,
      original_url: original_url,
      custom_slug: custom_slug,
      qr_code: generatedSvg,
    },
  });

  return new_link;
}
