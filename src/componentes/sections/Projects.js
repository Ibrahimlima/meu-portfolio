import styles from './Projects.module.css'
import ButtonB from '../elements/ButtonB'
import Card from '../elements/Card'
import arqt from '../../img/Projects/arquiteturadnc.svg'
import ccxp from '../../img/Projects/ccxpdnc.svg'
import lndpg from '../../img/Projects/landingpagednc.svg'
import tabu from '../../img/Projects/tabuadadnc.svg'
import weather from '../../img/Projects/weatherdnc.svg'
import portf from '../../img/Projects/portfoliotestednc.svg'
import portfB from '../../img/Projects/portfolioBruno.svg'



function Projects(){
    return(
        <div className={styles.projects} id="projects">
            <h1>Projetos</h1>
            <div>
                <Card 
                site='https://ibrahimproject1dnc.netlify.app/'
                img={lndpg}
                title='Landing-Page DNC'
                tec= 'HTML / CSS / JS'
                descr='Este é o projeto de desenvolvimento do módulo base do curso de tecnologia da escola DNC. Foi criada uma landing-page da DNC.'
                rep='https://github.com/Ibrahimlima/Projeto-Lading-Page'
                />
                <Card 
                site='https://arquiterurasdncibrahim.netlify.app/'
                img={arqt}
                title='Empresa de Arquitetura'
                tec='HTML / CSS'
                descr='Este projeto foi feito para o "Desafio nº 1" durante o curso da DNC. Sendo criada um site de uma empresa de arquitetura.'
                rep='https://github.com/Ibrahimlima/Arquitetura'
                />
                <Card 
                site='https://github.com/Ibrahimlima/Portfolio_teste'
                img={portf}
                title='Portfólio teste'
                tec='HTML / CSS'
                descr='Este projeto foi feito durante o curso da DNC. Criação de um molde para um portfólio de uma programadora.'
                rep='https://github.com/Ibrahimlima/Portfolio_teste'
                />
                <Card 
                site='https://tabuadamultdnc.netlify.app'
                img={tabu}
                title='Tabuada'
                tec='HTML / CSS / JS'
                descr='Este projeto foi feito durante o curso da DNC. Criação de uma tabuada interativa, que é capaz de apresentar todos os valores requisitados de forma rápida.'
                rep='https://github.com/Ibrahimlima/TabuadaMultiplicacao'
                />
                <Card 
                site='https://ccxp2022dnc.netlify.app'
                img={ccxp}
                title='CCXP'
                tec='HTML / CSS / JS'
                descr='Este projeto foi feito durante o curso da DNC. Criação de um site apresentando o evento da CCXP de 2022(cronometro referente a outra data).'
                rep='https://github.com/Ibrahimlima/CCXP2022DNC'
                />
                <Card 
                site='https://ibrahimweatherdnc.netlify.app'
                img={weather}
                title='Weather DNC'
                tec='HTML / CSS / JS'
                descr='Este projeto foi feito para o "Desafio nº 2" durante o curso da DNC. Sendo criado um site capaz de apresentar as informações de cep e temperatura de locais especificado.'
                rep='https://github.com/Ibrahimlima/WeatherDNC'
                />
                <Card 
                site='meu-portfolio-three-xi.vercel.app'
                img={portfB}
                title='Ibrahim`s Portfólio'
                tec='HTML / CSS / JS / REACT'
                descr='Este projeto foi feito durante o curso da DNC. Sendo criado este meu portfólio.'
                rep='https://github.com/Ibrahimlima/meu-portfolio'
                />
            </div>
            <div className={styles.divbtn}>
            <ButtonB text='Acesse meu repositório' link='https://github.com/Ibrahimlima?tab=repositories'/>
            </div>
        </div>
    )
}

export default Projects