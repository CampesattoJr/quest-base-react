import './paragraph.css'

const upperCase = (text) => text.toUpperCase()


const Paragraph = ({text, color}) => {
    return (
        <div className='paragraph'>
            <p style={{color: color}} >{upperCase(text)}</p>
        </div>
    )
}

export default Paragraph