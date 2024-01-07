import styles from './sectionMain.module.css'

function SectionMain() {

  
    return (
      <main>
        <div className={styles.projectsTitle}>Projetos em destaque</div>
        <div className={styles.projects}>

            <a href="https://melodic-salmiakki-bdf724.netlify.app/" target="_blank">
                <div className={styles.projectItem} id={styles.project1}>
                    <legend>Em Cartaz</legend>
                </div>
            </a>


            <a href="https://singular-meringue-edc4e2.netlify.app/" target="_blank">
                <div className={styles.projectItem} id={styles.project2}>
                    <legend>Real Estate</legend>
                </div>
            </a>

            <div className={styles.projectItem} id={styles.project3}>
                <legend>Medicenter</legend>
            </div>
            </div>
      </main>
    )
  }
  
  export default SectionMain