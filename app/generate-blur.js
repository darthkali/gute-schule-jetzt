



import { fileURLToPath } from "url";
import path from "path";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagePath = path.resolve(__dirname, "../public/images/abstract-1264071_1920.png");



async function generateBlurDataUrl(imagePath) {
    try {
        const buffer = await sharp(imagePath)
            .resize(10) // 10px Breite, proportional skalieren
            .toFormat("png")
            .toBuffer();

        const base64 = buffer.toString("base64");
        const dataUrl = `data:image/png;base64,${base64}`;

        console.log("✅ blurDataURL:");
        console.log(dataUrl);
    } catch (error) {
        console.error("❌ Fehler beim Generieren des Blur-Placeholders:", error);
    }
}

generateBlurDataUrl(imagePath);
