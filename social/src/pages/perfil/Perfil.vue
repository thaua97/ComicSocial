<template>
    <login-template>
        <span slot="logo">
            <img class="responsive-img" src="http://www.instintomangaka.com/wp-content/uploads/2016/01/logo-social-comics-550x350.png?x58370" alt="">
        </span>
        <span slot="form">
            <h2>Perfil</h2>
            <div class="divider"></div>
            <br>
                <div class="input-field">
                    <label for="nome">Nome</label>
                    <input id="nome" type="text" name="nome" v-model="name">
                </div>
                <div class="input-field">
                    <label for="email">E-mail</label>
                    <input id="email" type="email" v-model="email">
                </div>
                <div class="input-field">
                    <label for="senha">Senha</label>                    
                    <input id="senha" type="password" v-model="password">
                </div>
                <div class="input-field">
                    <label for="csenha">Confirma Senha</label>                    
                    <input id="csenha" type="password" v-model="password_confirmation">
                </div>  
                <button class="btn" v-on:click="cadastro()">enviar</button>
                <router-link class="btn pink" to="/login">Já tenho Conta</router-link>
        </span>      
    </login-template>
</template>
<script>
    import LoginTemplate from '@/templates/LoginTemplate'
    import axios from 'axios'

    export default {
        name: 'Perfil',
        components: {
            LoginTemplate
        },
        data () {
            return {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            }
        },
        methods: {
            cadastro(){
                axios.post('http://localhost:8000/api/cadastro', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation

                })
                .then(response => {
                    //console.log(response)
                    if(response.data.token){
                        //login com sucesso
                        console.log("cadsatro realizado com sucesso");  
                        sessionStorage.setItem('usuario', JSON.stringify(response.data))
                        this.$router.push('/');                      
                    }else if(response.data.status == false){
                        //login não existe
                        alert('Erro no cadastro, tente novamente mais tarde');
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