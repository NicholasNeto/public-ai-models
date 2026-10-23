class Translator{
    static translator = null 

    static translate(textENG){
        return [{ "translated_text": "Texto traduzido pelo modelo api"}]
    }
}


exports.Translator = Translator