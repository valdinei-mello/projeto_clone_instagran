import { Usuario } from "./acesso/usuario.model";
import * as firebase from "firebase";

export class Autenticacao {
    public cadastrarUsuario(usuario: Usuario): void {
        //console.log('chegamos aqqui', usuario)

        firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then((resposta: any) => {

                //remove a senha do usuario e nao salva no banco de dados
               // delete usuario.email
                    
                //registrando dados do usuario no path email na vase 64
                firebase.database().ref(`usuario_detalhe/${btoa(usuario.email)}`)
                    .set(usuario)
            })
            .catch((error: Error) => {
                console.log(error)
            })
    }

    public autenticar(email:string, senha:string):void{
        firebase.auth().signInWithEmailAndPassword(email,senha)
        .then((resposta:any) => console.log(resposta))
        .catch((error:Error)=>console.log(error))
        
        
      
    }
}