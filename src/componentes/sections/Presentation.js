import ButtonA from '../elements/ButtonA'
import styles from './Presentation.module.css'

function Presentation(){
    return(
        <div className={styles.presentation} id="presentation">
            <h3><strong>Bem-vindo ao meu Portfólio</strong></h3> 
            <h1>Olá, eu sou o Bruno</h1>
            <p> Sou apaixonado por tecnologia e games. <br/>
            Como Desenvolvedor front-end, aplico meu conhecimento de HTML, CSS e JavaScript <br/> 
            para criar e otimizar a interface visual de sites e aplicativos web. <br/>
            Além disso, possuo conhecimentos teóricos em redes de sistemas e banco de dados. <br/>
            Estou sempre em busca de novos desafios e também contribuir <br/>em projetos visando crescer profissionalmente.</p>

            <ButtonA link={'https://github.com/Ibrahimlima'} text={'Conecte-se comigo!!'}/>
           
        </div>
    )
}

export default Presentation