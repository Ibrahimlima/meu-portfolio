import styles from './Card.module.css'
import ButtonB from './ButtonB'




function Card({site, img, title, tec, descr, rep}){
    return(
        <div className={styles.card}>
            
            <a href={site}>
            <img src={img} alt= 'Error'/>
            </a>
            <section>
                <h2>{title}</h2>
                <p>{tec}</p>
                <p>{descr}</p>

                <ButtonB text='Acesse o repositório' link={rep}/>
            </section>
        </div>
    )
}

export default Card