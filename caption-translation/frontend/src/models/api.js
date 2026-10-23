import ImageCaptioner from "./imageCaptioner";

async function generateCaption(imageSrc) {
  return ImageCaptioner.generateCaption(imageSrc);
}


async function translateCaption(captionENG) {
  return [{translated_text: "Legenda traduzindo ...."}] ;
}



export { generateCaption, translateCaption };
