import styles from './header.module.css'
import Menu from './menu'

const Header = ()=> {
  return( 

    <div className={styles.containerHeader}>
        
        <div className={styles.logo}>

        </div>

        <nav className={styles.menuButton}>
            <Menu />
        </nav>

        <nav className={styles.listContainer}>

        </nav>

    </div>

    
);
}

export default Header;
