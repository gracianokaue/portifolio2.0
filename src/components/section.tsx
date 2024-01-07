import styles from './section.module.css'
import author from '../assets/author.png'

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
        </div>

        <div className={styles.sectionPicture}>

        </div>
    </section>
);
}

export default Section;
