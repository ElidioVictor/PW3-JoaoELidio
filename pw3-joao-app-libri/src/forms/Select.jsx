import style from './Select.module.css'

function Select({name, text, options}){
    return(

        <div className={style.form_control}>

            <label htmlFor={name}> {text} </label>
            <select name={name} id={name}>

                <option>Selecione uma categoria</option>

                {
                    options.map((option)=>(
                        <option key={option.cod_categoria} value={option.cod_categoria}>
                            {option.nome_categoria}
                        </option>
                    ))
                }

            </select>

        </div>
    )
}

export default Select;