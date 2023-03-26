import {useState} from 'react'

function Login({trocarTela}){
    const [name, setName] = useState('')
    const [senha, setSenha] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (name !== 'admin'){
            return alert("Nome incorreto")
        }
        if (senha !== 'admin'){
            return alert("Senha incorreto")
        }

        return trocarTela('Escolha')
    }
    return(
        <div style={styles.container}>
            <h1 style={styles.title}>Login</h1>
            <form style={styles.form} onSubmit={handleSubmit}>
            <input style={styles.input} placeholder="Nome" value={name} onChange={(e) => {setName(e.target.value)}}/>
            <input style={styles.input} placeholder="Senha" type="password" value={senha} onChange={(e) => {setSenha(e.target.value)}}/>
            <button style={styles.button} type="submit">Acessar</button>
            </form>
            nome:admin senha:admin
        </div>
)}

const styles = {
    container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '72px 16px 0px 16px'
    },
    title: {
        fontSize: '2.4rem',
        marginBottom: '48px'
    },
    form:{
        width: '100%'
    },
    input:{
        height: '45px',
        width: '100%',
        backgroundColor: '#f4f4f4',
        borderRadius: '8px',
        border: '1px solid #d0d0d0',
        paddingLeft: '8px',
        marginBottom: '20px'
    },
    button:{
        height: '45px',
        width: '100%',
        borderRadius: '8px',
        backgroundColor: '#FAAA1F',
        border: '0',
        fontSize: '1.8rem',
        marginTop: '12px'
    }
}

export default Login