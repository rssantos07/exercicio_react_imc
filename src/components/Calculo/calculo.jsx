import { useEffect, useState } from 'react'
import InputMask from 'react-input-mask';


import styles from './Calculo.module.css'
import imc1 from '../../assets/imc1.png'
import imc2 from '../../assets/imc2.png'
import imc3 from '../../assets/imc3.png'
import imc4 from '../../assets/imc4.png'
import imc5 from '../../assets/imc5.png'
import imc6 from '../../assets/imc6.png'



const Calculo = () => {
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    const [imc, setImc] = useState()

    useEffect(() => {
        const resultado = ((peso / (altura * altura)))
        if (isNaN(resultado)) {
            setImc(0)
        } else {
            setImc(resultado.toFixed(2))
        }
    })
    const Renderiza = () => {
        let estado = 0
        if (imc >= 1 && imc < 18.5) {
            estado = 1
        } else if (imc >= 18.5 && imc < 25){
                estado = 2
        }else if (imc >= 25 && imc < 30){
            estado = 3
        }else if (imc >= 30 && imc < 40){
            estado = 4
        }else if ( imc > 40){
            estado=5
        }
        return estado
    }



        return (
            <div className="container">
                <p>Vamos calcular sua massa corporal?</p>
                <div className={styles.formulario}>
                    <form >
                        <label > Altura: </label>
                        <InputMask mask="9.99" className={styles.input} type="text" onChange={({ target }) => setAltura(parseFloat(target.value))} />

                        <label > Peso: </label>
                        <input className={styles.input} type="number" onChange={({ target }) => setPeso(parseFloat(target.value))} />

                    </form>

                </div>
                <h1 className={styles.titulo}>Resultado: {imc}</h1>
                <div>
                    <img className={styles.imagens} src={imc1} alt="" />
                    <img className={styles.imagens} src={imc2} style={{ opacity: Renderiza() === 1 ? 1 : 0.5 }} alt="" />
                    <img className={styles.imagens} src={imc3} style={{ opacity: Renderiza() === 2 ? 1 : 0.5 }} alt="" />
                    <img className={styles.imagens} src={imc4} style={{ opacity: Renderiza() === 3 ? 1 : 0.5 }} alt="" />
                    <img className={styles.imagens} src={imc5} style={{ opacity: Renderiza() === 4 ? 1 : 0.5 }} alt="" />
                    <img className={styles.imagens} src={imc6} style={{ opacity: Renderiza() === 5 ? 1 : 0.5 }} alt="" />
                </div>
            </div>

        )
    }

    export default Calculo
