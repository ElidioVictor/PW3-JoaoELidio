import React, { useEffect, useState } from "react";
import style from './CreateBooks.module.css'
import Input from "../../forms/Input";
import Select from "../../forms/Select";
import Button from "../../forms/Button";

const CreateBooks = () => {

    const [categorias, setCategorias] = useState([]);
    const [book, setBook] = useState({});


    function handlerChangeBook(event) {
        setBook({...book, [event.target.name] : event.target.value});
        console.log(book)
    }

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
                resp.json()
            }
        ).then(
            (data) =>{
                setCategorias(data.data)
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
                handlerChangeBook={handlerChangeBook}
            />
            <Input
                type='text'
                name='txt_autor'
                placeHolder='digite o nome do autor do livro'
                text='Nome autor do livro'
                handlerChangeBook={handlerChangeBook}
            />
            <Input
                type='text'
                name='txt_descrição'
                placeHolder='digite uma breve descrição do livro'
                text='Descrição do livro'
                handlerChangeBook={handlerChangeBook}
            />

            <Select 
                name='categoria'
                text='Selecione a categoria do livro'   
                options={categorias} 
            />

            <Button rotulo='Cadastrar Livro'/>

        </section>
    )
}

export default CreateBooks