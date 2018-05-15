<template>
    <login-template>
        <span slot="logo">
            <img class="responsive-img" src="http://www.instintomangaka.com/wp-content/uploads/2016/01/logo-social-comics-550x350.png?x58370" alt="">
        </span>
        <span slot="form">
            <h2>Login</h2>
            <div class="divider"></div>
            <br>
                <div class="input-field">
                    <label for="email">E-mail</label>
                    <input id="email" type="email" name="email" v-model="email">
                </div>
                <div class="input-field">
                    <label for="senha">Senha</label>                    
                    <input id="senha" type="password" name="password" v-model="password">
                </div> 
                <button class="btn" v-on:click="login()">Entrar</button>
                <router-link class="btn pink" to="/cadastro">Cadastrar-se</router-link>                            
               
        </span>
    </login-template>
</template>
<script>
    import LoginTemplate from '@/templates/LoginTemplate'
    import axios from 'axios'

    export default {
        name: 'Login',
        components: {
            LoginTemplate
        },
        data () {
            return {
                 email: '',
                 password: ''       
            }
        },
        methods: {
            login(){
                axios.post('http://localhost:8000/api/login', {
                    email: this.email,
                    password: this.password
                })
                .then(response => {
                    //console.log(response)
                    if(response.data.token){
                        //login com sucesso
                        console.log("login com sucesso");  
                        sessionStorage.setItem('usuario', JSON.stringify(response.data))
                        this.$router.push('/');                      
                    }else if(response.data.status == false){
                        //login não existe
                        console.log("login não existe");
                        alert('Login inválido!');
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
                   console.log(e)
                   alert("Erro! Tente Novamente mais tarde!");
                })            
            }
        }
    }
    
</script>