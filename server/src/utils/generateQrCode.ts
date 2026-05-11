import QRCode from "qrcode";
import { AppError } from "./appError.utils";

export const generateQrCode = async (url: string): Promise<string> => {
  try {
    const svgString = await QRCode.toString(url, { type: "svg" });
    return svgString;
  } catch (err) {
    throw new AppError(
      "QR-Code konnte nicht generiert werden",
      500,
      "QR_GENERATION_FAILED",
    );
  }
};
