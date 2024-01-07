import styles from './section.module.css'
import inBtn from '../assets/linkedin2.png'
import gitBtn from '../assets/github.png'
import whatsBtn from '../assets/whatsapp.png'

const Section = ()=> {
  return( 
    
    <section className={styles.sectionContainer}>
        <div className={styles.sectionText}>
            <div className={styles.sectionTitle}>
                Olá, seja bem vindo!
            </div>

            <div className={styles.sectionInfo}>
                Sou Kauê Graciano, desenvolvedor web, confira aqui alguns dos meus projetos, aguardo seu contato!
            </div>

            <div className={styles.buttons}>

                <div className={styles.contacts} id='contactLinkedin'><a href='https://www.linkedin.com/in/gracianokaue' target='_blank'> <img src={inBtn} /></a></div>
                <div className={styles.contacts} id='contactGithub'><a href='https://github.com/gracianokaue/' target='_blank'> <img src={gitBtn} /></a></div>
                <div className={styles.contacts} id='contactWhatsapp'><a href='https://wa.me/5541991597130' target='_blank'> <img src={whatsBtn} /></a></div>

            </div>

        </div>

        <div className={styles.sectionPicture}></div>


    </section>
);
}

export default Section;
