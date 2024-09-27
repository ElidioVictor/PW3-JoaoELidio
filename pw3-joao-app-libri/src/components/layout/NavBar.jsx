import styles from './NavBar.module.css'
import { Outlet, Link } from 'react-router-dom';

const NavBar = ()=> {
    return(
        <>
            <nav className={styles.navBar}>

                <ul className={styles.list}>

                    <Link to='/'>
                        <li className={styles.item}><img className={styles.logo} src='./book.png'/></li>
                    </Link>

                    <Link to='/'>
                        <li className={styles.item}>HOME</li>
                    </Link>
                    <Link to='/createBook'>
                        <li className={styles.item}>Cadastrar Livro</li>
                    </Link>
                    <Link to='/listBook'>
                        <li className={styles.item}>Listar Livro</li>
                    </Link>

                </ul>

            </nav>

            <Outlet />
        </>
    )
}

export default NavBar;