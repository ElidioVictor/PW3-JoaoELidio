import style from './Select.module.css'

function Select({name, text, options}){
    return(

        <div className={style.form_control}>

            <label htmlFor={name}> {text} </label>
            <select name={name} id={name}>

                {
                    options.map((option)=>(
                        <option>{option.nome_categoria}</option>
                    ))
                }

            </select>

        </div>
    )
}

export default Select;