import styles from './Footer.module.css'
import { FaLinkedin, FaGithub } from "react-icons/fa6";


function Footer(){
    return(
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.linkedin.com/in/bruno-barros-de-lima-66a122254/'> <FaLinkedin size={30}/></a></li>
                <li><a href='https://github.com/Ibrahimlima'><FaGithub size={30} /></a></li>
            </ul>
            <p>brunob.ibrahimlima@gmail.com</p>
            <p>Bruno Barros © 2024</p>
        </div>
    )
}

export default Footer