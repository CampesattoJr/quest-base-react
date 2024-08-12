import './button.css'

const sayLabel = (label) => {
    alert(`A label desse botão é "${label}"`)
}

const Button = ({ label = 'Clique aqui' }) => {
    return (
        <div className='container-btn'>
            <button className='btn' onClick={() => sayLabel(label)}>{label}</button>
        </div>
    )
}

export default Button