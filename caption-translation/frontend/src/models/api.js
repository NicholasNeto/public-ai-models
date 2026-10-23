import ImageCaptioner from "./imageCaptioner";

async function generateCaption(imageSrc) {
  return ImageCaptioner.generateCaption(imageSrc);
}


async function translateCaption(captionENG) {
  const response = await fetch("http://localhost:3000/translate",
    {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({"text": captionENG})
    },
   )
  const data = response.json()
  return data ;
}



export { generateCaption, translateCaption };
