import { useState, useEffect } from "react";


export function MaquinaDeEscrever(props) {
    const [text, setText] = useState("");

    const escreveNaTela = (text, i = 0) => {
        if (i < text.length) {
            setText(text.slice(0, i + 1));
            return setTimeout(() => escreveNaTela(text, i + 1), 30);
        }
        else {
            props.setShowPedido(true);
        }
    }


    useEffect(() => {
        setTimeout(() => escreveNaTela(props.text));
    }, []);
    return (<p>{text}</p>);
}
