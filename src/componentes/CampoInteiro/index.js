import React from "react";
import { TextInput } from "react-native";
import estilosPadrao from "./estilos";

export default function CampoInteiro({valor, estilos, acao}) {
    const atualiza=(novoValor,acaoRetorno) => {
        const verificaInteiro=novoValor.match(/^[0-9]*$/); //Expressão regular para verificar se o que for digitado é um numero inteiro que estaja dentre os valores de 0 a 9.
        if(!verificaInteiro) return; //Se esse valor digitado não for um numero inteiro, esse is so ira retornar esse valor sem salvar ele.

        const removeZeroEsquerda = novoValor.replace(/^(0)(.+)/, '$2'); //Expressão regular para tirar o zero a esquerda e fazer com que ele seja sobrescrito pelo numero que for acompanhado dele, por exemplo se for digitado o 02, então o 2 irá sobrescrever o 0.

        acaoRetorno(removeZeroEsquerda);
    }
    const numeroEmTexto = String(valor);
    return <TextInput 
    style={[estilosPadrao.campo, estilos]}
        keyboardType="number-pad" //Abre o teclado do celular apenas com numeros
        selectTextOnFocus //Ao clicar no numero desejado, ja seleciona todo, assim é possivel apenas sobrescrever.
        onChangeText={(novoValor) => {atualiza(novoValor, acao)}}
        value={numeroEmTexto}
    />
}