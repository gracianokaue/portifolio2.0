import styles from './header.module.css'
import inBtn from '../assets/linkedin2.png'
import gitBtn from '../assets/github.png'
import whatsBtn from '../assets/whatsapp.png'

const Header = ()=> {
  return( 

    <div className={styles.containerHeader}>
        <div className={styles.logo}>

        </div>

        <nav>
            <div className={styles.buttons}>

                <div className={styles.contacts} id='contactLinkedin'><a href='https://www.linkedin.com/in/gracianokaue' target='_blank'> <img src={inBtn} /></a></div>
                <div className={styles.contacts} id='contactGithub'><a href='https://github.com/gracianokaue/' target='_blank'> <img src={gitBtn} /></a></div>
                <div className={styles.contacts} id='contactWhatsapp'><a href='https://wa.me/5541991597130' target='_blank'> <img src={whatsBtn} /></a></div>

            </div>

            <div className={styles.menu}>

            </div>
        </nav>

    </div>

    
);
}

export default Header;
