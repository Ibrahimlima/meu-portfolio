import styles from './Navbar.module.css'
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/esm/NavLink';
function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li><NavLink href='#presentation'>Apresentação</NavLink></li>
                <li><NavLink href='#skills'>Habilidades</NavLink></li>
                <li><NavLink href='#projects'>Projetos</NavLink></li>
            </ul>
            <ul>
                <li><a href='https://www.linkedin.com/in/bruno-barros-de-lima-66a122254/'> <FaLinkedin size={30}/></a></li>
                <li><a href='https://github.com/Ibrahimlima'><FaGithub size={30} /></a></li>
            </ul>
        </div>
    )
}

export default Navbar
