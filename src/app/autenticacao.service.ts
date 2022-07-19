import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Usuario } from "./acesso/usuario.model";
import * as firebase from "firebase";

@Injectable()
export class Autenticacao {

    public token_id?: string;

    constructor(private router:Router){}

    public cadastrarUsuario(usuario: Usuario): Promise<any> {
        //console.log('chegamos aqqui', usuario)

        return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
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

    public autenticar(email: string, senha: string): void {
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((resposta: any) => {
                firebase.auth().currentUser?.getIdToken()
                .then((Token_id: string)=>{
                    this.token_id=Token_id
                    this.router.navigate(['/home'])
                    
                })
            })
            .catch((error: Error) => console.log(error))



    }
}