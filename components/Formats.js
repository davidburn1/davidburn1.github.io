export default function FormatLatex({ children }) {
    //console.log(children);
    var text = children;

    function replacer(match, text, offset, string) {
        text = text.replace(/_{(.*?)}/g, "<sub>$1</sub>"); // multi character subscript
        text = text.replace(/\^{(.*?)}/g, "<sup>$1</sup>"); // multi character superscript
        text = text.replace(/_(.)/g, "<sub>$1</sub>"); // single character subscript
        text = text.replace(/\^(.)/g, "<sup>$1</sup>"); // single character superscript
        return text;
    }

    if (text === undefined){
        text = "";
    } else {
        text = text.replace(/\$(.*?)\$/g, replacer); // detects all math mode 
    }

    return (
        <div dangerouslySetInnerHTML={{ __html: text}} />
    );
  }
