import Button from './Button'

const Header = (props) =>{
const onClick = () =>{
        console.log('Click');
        }
    return(
        <header className='header'>
            <h1>Header {props.title}</h1>
            <h1 style={{color:'red', backgroundColor:'black'}}>Header {props.title}</h1>
            <h1 style={headingStyle}>Header {props.title}</h1>
            <Button onClick={onClick} text='Nuevo'/>
        </header>    
    )
}
Header.defaultProps={title: 'Default title'}

const headingStyle={
    color:'red', 
    backgroundColor:'black'
}
export default Header
