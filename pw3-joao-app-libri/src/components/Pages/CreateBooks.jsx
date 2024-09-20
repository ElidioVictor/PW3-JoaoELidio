import React, { useEffect, useState } from "react";
import style from './CreateBooks.module.css'
import Input from "../../forms/Input";
import Select from "../../forms/Select";
import Button from "../../forms/Button";

const CreateBooks = () => {

    useEffect(() =>{
        fetch('http://localhost:5000/listagemCateorias',{
            method: 'GET',
            headers:{
                'content-Type' : 'application/json',
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Headers' : '*'
            }
        }).then(
            (resp) =>{
                // console.log('RESPOSTA' + resp)
                resp.json()
            }
        ).then(
            (data) =>{
                console.log('DATA:'  + data.data[0])
            }
        ).catch(
            (error) =>{
                console.log(error)
            }
        )
    },[]);

    return(
        <section className={style.createBooks_container}>

            <h1>CADASTRO DE LIVROS</h1>

            <Input
                type='text'
                name='txt_livro'
                placeHolder='digite o nome do livro a ser cadastrado'
                text='Titulo do livro'
            />
            <Input
                type='text'
                name='txt_autor'
                placeHolder='digite o nome do autor do livro'
                text='Nome autor do livro'
            />
            <Input
                type='text'
                name='txt_descrição'
                placeHolder='digite uma breve descrição do livro'
                text='Descrição do livro'
            />

            <Select 
                name='categoria'
                text='Selecione a categoria do livro'    
            />

            <Button rotulo='Cadastrar Livro'/>

        </section>
    )
}

export default CreateBooks