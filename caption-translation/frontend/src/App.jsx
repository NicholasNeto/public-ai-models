import { useState } from "react";
import { generateCaption, translateCaption } from "./models/api";

import "./App.css";

function App() {
  const [imageSrc, setImageSrc] = useState(null);
  const [caption, setCaption] = useState(null);
  const [captionPTBR, setcaptionPTBR] = useState("<Legenda>");
  captionPTBR

  async function addCapition() {
    setCaption("Gerando legenda ...");
    const caption = await generateCaption(imageSrc);
    setCaption(caption[0]["generated_text"]);
    
    setcaptionPTBR("Traduzindo legenda...")
    const captionPTBR = await translateCaption(caption)
    setcaptionPTBR(captionPTBR[0]["translation_text"])
  }

  return (
    <>
      <h1>Caption Generator</h1>
      <div className="url-form">
        <input
          type="text"
          onChange={(e) => setImageSrc(e.target.value)}
        ></input>

        <button onClick={addCapition}>Generate</button>
      </div>
      <div className="captioned-image">
        <img height="200" src={imageSrc} alt="" />
        <span>{caption}</span>
        <span>{captionPTBR}</span>
      </div>
    </>
  );
}

export default App;
