import ImageCaptioner from "./imageCaptioner";

async function generateCaption(imageSrc) {
  return ImageCaptioner.generateCaption(imageSrc);
}

export { generateCaption };
