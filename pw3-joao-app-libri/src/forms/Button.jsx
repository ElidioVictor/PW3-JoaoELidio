import style from './Button.module.css'

function Button({rotulo}){
    return(

        <div className={style.button}>

            <button>{rotulo}</button>

        </div>

    )
}

export default Button;