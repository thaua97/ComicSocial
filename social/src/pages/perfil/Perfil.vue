<template>
    <site-template>
        <span slot="menuesquerdo">
            <img class="responsive-img" src="http://www.instintomangaka.com/wp-content/uploads/2016/01/logo-social-comics-550x350.png?x58370" alt="">
        </span>
        <span slot="principal">
            <h2>Perfil</h2>
            <div class="divider"></div>
            <br>
                <div class="input-field">
                    <label for="nome">Nome</label>
                    <input id="nome" type="text" v-model="name">
                </div>
                <div class="input-field">
                    <label for="email">E-mail</label>
                    <input id="email" type="email" v-model="email">
                </div>
                <div class="file-field input-field">
                    <div class="btn">
                        <span>Foto Perfil</span>
                        <input type="file">
                    </div>
                    <div class="file-path-wrapper">
                        <input class="file-path validate" type="text">
                    </div>
                </div>
                <div class="input-field">
                    <label for="senha">Senha</label>                    
                    <input id="senha" type="password" v-model="password">
                </div>
                <div class="input-field">
                    <label for="csenha">Confirma Senha</label>                    
                    <input id="csenha" type="password" v-model="password_confirmation">
                </div>  
                <button class="btn" v-on:click="perfil()">Atualizar</button>
        </span>      
    </site-template>
</template>
<script>
import SiteTemplate from "@/templates/SiteTemplate";
import axios from "axios";

export default {
  name: "Perfil",
  data() {
    return {
      usuario: false,
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    }
  },
  created(){
    let usuarioAux = sessionStorage.getItem('usuario');
    if(usuarioAux){
      this.usuario = JSON.parse(usuarioAux);
      this.name = this.usuario.name;
      this.email = this.usuario.email;
    }
  },
  components: {
    SiteTemplate
  },
  methods: {
    perfil() {
      axios.put("http://localhost:8000/api/perfil", {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        }, 
        {
            "headers": {
                "authorization": "Bearer "+this.usuario.token
            }
        })
        .then(response => {
           if (response.data.token){
              console.log(response.data);  
                                  
            } else{
            // erros de validacao
            console.log("erro de validação");
            let erros = '';
            for (let erro of Object.values(response.data)){
                erros += erro +" ";
            }
            alert(erros);                   
            }
        })
        .catch(e => {
          console.log(e);
          alert("Erro! Tente Novamente mais tarde!");
        })
    }
  }
}
</script>