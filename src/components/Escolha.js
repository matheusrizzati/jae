function Escolha({trocarTela}){
    return(
    <div style={styles.container}>
    <h1 style={styles.h1}>Bem-vindo</h1>
    <h2 style={styles.h2}>Escolha seu perfil</h2>

    <button style={styles.button} onClick={(e) => {e.preventDefault(); alert("Em implementação")}}>Sou turista</button>
    <button style={styles.button} onClick={(e) => {e.preventDefault(); trocarTela('ValidarCupom')}}>Sou empresa</button>
    </div>
)}

const styles = {
    container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '80px 16px 0px 16px'
    },
    button:{
            height: '45px',
            width: '100%',
            backgroundColor: '#f4f4f4',
            borderRadius: '8px',
            border: '1px solid #d0d0d0',
            paddingLeft: '8px',
            marginBottom: '16px',
    },
    h1:{
        fontSize: '4rem',
        color: '#FAAA1F',
        marginBottom: '24px',
    },
    h2:{
        fontSize: '1.6rem',
        color: '#535353',
        marginBottom: '44px',
    }
}

export default Escolha