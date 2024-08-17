import './button.css'

const Button = ({ label = 'Clique aqui' }) => {
    return <div className='container-btn'><button className='btn' onClick={() => alert(`A label desse botão é "${label}"`)}>{label}</button></div>
}

export default Button