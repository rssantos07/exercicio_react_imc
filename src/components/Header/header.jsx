import minhaImagem from '../../assets/imgimc.png';
import styles from './Titulo.module.css'

const Header = () =>  {
  

    return (
      < div className='container'>
        <h1 className={styles.titulo} >Índice de Massa Corporal</h1>

        <img className={styles.img} src={minhaImagem} alt="" width="100%" />
      </div>
    )
  }
  
  export default Header
  