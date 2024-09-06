import style from './Select.module.css'

function Select({name, text}){
    return(

        <div className={style.form_control}>

            <label htmlFor={name}> {text} </label>
            <select name={name} id={name}>
                <option>Selecione uma categoria</option>
                <option>Ficção Cientifica</option>
                <option>Fantasia Heróica</option>
                <option>Suspense</option>
                <option>Terror</option>
            </select>

        </div>
    )
}

export default Select;