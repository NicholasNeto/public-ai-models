import { pipeline } from "@huggingface/transformers";

export default class ImageCaptioner {
  static captioner = null;

  static async getCaptioner() {
    console.log("retornando ao captioner");
    if (this.captioner === null) {
      console.log("passei por aqui...");
      this.captioner = await pipeline(
        "image-to-text",
        "Xenova/vit-gpt2-image-captioning",
        { dtype: "g8" },
      );
      console.log("Modelo carregado");
    }
    return this.captioner;
  }

  static async generateCaption(imageSrc) {
    return this.getCaptioner().then((captioner) =>
      captioner(imageSrc, {
        do_sample: true,
      }),
    );
  }
}
