import styles from './skills.module.css'
import js from '../../img/skills/js.svg'
import html from '../../img/skills/html.svg'
import css from '../../img/skills/css.svg'
import react from '../../img/skills/react.svg'

function Skills(){
    return(
        <div className={styles.skills} id="skills">
            <h1>Habilidades</h1>
            <h3>Conheça um pouco das minhas principais habilidades e conhecimentos.</h3>
            <div>
                <img src={html}/>
                <img src={css}/>
                <img src={js}/>
                <img src={react}/>

            </div>
        </div>
    )
}

export default Skills