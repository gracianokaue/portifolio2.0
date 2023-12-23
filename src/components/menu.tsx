import styles from './menu.module.css'

const Menu = ()=>{
    return(
        <div className={styles.menuContainer}>
            <input type="checkbox" className={styles.menuFaketrigger} />
                                
                <div className={styles.menuLines}>
                        
                    <span></span>
                    <span></span>
                    <span></span>
                        
                </div>
                                            
                <ul>
                        
                    <li>
                        
                        <a href="">Inicio</a>
                        
                    </li>
                        
                    <li>
                        
                        <a href="">Projetos</a>
                        
                    </li>
                        
                    <li>
                        
                        <a href="">Sobre</a>
                        
                    </li>
                        
                        
                </ul>
        </div>
    );
}

export default Menu;