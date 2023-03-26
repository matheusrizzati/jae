import { calculateNewValue } from "@testing-library/user-event/dist/utils"
import { useState } from "react"

function ValidarCupom(){
    const [valor, setValor] = useState('')
    const [cupom, setCupom] = useState('')
    const [cupomValido, setCupomValido] = useState(false)

    const valorDescontado = (valor * 0.08).toFixed(2)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!valor){
            alert("Informe o valor da sua compra")
        }
        if(cupom !== '#23JAE8%'){
            return setCupomValido(false)
            alert("Cupom inválido")
        }

        return setCupomValido(true)
    }
    return(
        <>
        <header style={styles.header}>
            <h1 style={styles.h1}>Confeitaria Colombo</h1>
            <h2 style={styles.h2}>Validação do cupom</h2>
        </header>
        <div style={styles.container}>

        <form onSubmit={handleSubmit}>
            <h3>teste o cupom: #23JAE8%</h3>
            <label style={styles.label}>Valor compra/Ingresso</label>
            <input style={styles.input} value={valor} onChange={(e) => {setValor(e.target.value)}}/>
            <label style={styles.label}>Cupom informado</label>
            <input style={styles.input} value={cupom} onChange={(e) => {setCupom(e.target.value)}}/>

            {!!cupomValido &&
            <>
            
            <h4 style={styles.h4}>
                Cupom válido
            </h4>

            <h3 style={styles.label}>Cupom: 8% de desconto</h3>
            <h3 style={styles.label}>Desconto: R${valorDescontado}</h3>
            <h3 style={styles.label}>Valor final a ser pago: R${valor - valorDescontado}</h3>
            </>
            }

            <button style={styles.button} type="submit">Ja é</button>
        </form>
        </div>
        </>
    )
}

const styles = {
    header: {
        height: '70px',
        padding: '16px 16px 16px 16px',
        borderBottom: '1px solid #00000030'
    },
    container:{
            height: 'calc(100%-70px)',
            display: 'flex',
            flexDirection: 'column',
            padding: '28px 16px 0px 16px' 
    },
    h1:{
        color: '#FAAA1f',
        fontSize: '1.8rem'
    },
    h2:{
        fontSize: '1.2rem'
    },
    label:{
        color: '#535353',
        fontSize: '1.6rem',
        marginBottom: '5px'
    },
    h4:{
        color: '#FAAA1F',
        fontSize: '1.2rem',
        marginTop: '-10px',
        marginBottom: '32px'
    },
    input:{
        height: '45px',
        width: '100%',
        backgroundColor: '#f4f4f4',
        borderRadius: '8px',
        border: '1px solid #d0d0d0',
        paddingLeft: '8px',
        marginBottom: '16px'
    },

    button:{
        marginTop: '48px',
        height: '45px',
        width: '100%',
        borderRadius: '8px',
        backgroundColor: '#FAAA1F',
        border: '0',
        fontSize: '1.8rem',
    }
}

export default ValidarCupom
