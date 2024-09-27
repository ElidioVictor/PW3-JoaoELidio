import style from './Cardbook.module.css'
import Button from './Button'

const CardBooks = (props) => {
  return (
    <div className={style.bookCard}>

      <h3 className={style.titulo}>{props.nome}</h3>
      <p className={style.autor}>{props.autor}</p>
      <img src={props.imagem} alt={props.titulo} title={props.titulo}/>
      
      <div>
        <Button label='Show More'/>
      </div>

    </div>
  );
};

export default CardBooks;
