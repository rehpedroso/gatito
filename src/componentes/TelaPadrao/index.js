import React from "react";
import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from "react-native";
import estilosGlobal, { cores } from "../../estilos";
import estilos from "./estilos";

export default function TelaPadrao({ children }) {
    return<>
        <SafeAreaView style={estilos.ajusteTela}>
            <StatusBar backgroundColor={cores.roxo}/>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={estilosGlobal.preencher}
            >
                {children}
            </KeyboardAvoidingView>
        </SafeAreaView>
        <SafeAreaView style={estilos.ajusteTelaBaixo}/>
    </>
}

//Para os celulares Android adicionando apenas um 'backgroundColor' no 'StatusBar' a cor da parte superior da tela ja irá ser alterada, porém para celulares iOS isso ja não será possível. No entanto será necessario adicionar no 'SafeAreaView' os estilos e tambem será necessario adicionar mais uma 'SafeAreaView', desse modo uma é para adicionar a cor deseja na paret de cima e a outra na parte de baixo.