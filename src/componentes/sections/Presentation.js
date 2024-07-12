import ButtonA from '../elements/ButtonA'
import styles from './Presentation.module.css'
import {useEffect, useState} from 'react'

function Presentation(){

    const[text, settext] = useState('');
    const textRotate = ['Bruno Barros!', 'Desenvolvedor Front-End Jr!'];
    const[loop, setLoop] = useState(0);
    const[isDeleting, setIsDeleting] = useState(false);
    const period = 100
    const[delta, setDelta] = useState(100)

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()}, delta)
        return() =>{clearInterval(ticker)}

    }, [text])


    const toType = () => {
        let i = loop % textRotate.length;
        let fullText = textRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0, text.length+1);

        settext(updatedText);

        if(!isDeleting && updatedText===fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1)
        }
    }



    return(
        <div className={styles.presentation} id="presentation">
            <h3><strong>Bem-vindo ao meu Portfólio</strong></h3> 
            <h1>Olá, eu sou {text}</h1>
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