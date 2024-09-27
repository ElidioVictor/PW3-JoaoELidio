import style from './Button.module.css'

const Button = (props) => {
    return (
        <>
            <div>

                <button className={style.buttonCOntainer}>
                    {props.label}
                </button>
                
            </div>
        </>
    )
}

export default Button