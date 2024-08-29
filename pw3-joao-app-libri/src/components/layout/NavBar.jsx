import styles from './NavBar.module.css'

const NavBar = ()=> {
    return(
        <nav className={styles.navBar}>

            <ul className={styles.list}>

                <li className={styles.item}><img className={styles.logo} src='./book.png'/></li>

                <li className={styles.item}>HOME</li>
                <li className={styles.item}>Cadastrar Livro</li>
                <li className={styles.item}>Listar Livro</li>

            </ul>

        </nav>
    )
}

export default NavBar;