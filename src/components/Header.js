import Button from './Button'

const Header = (props) =>{
  const onClick = () =>{
    console.log('Click');
  }
    return(
        <header className='header'>
        <h1>{props.title}</h1>
            <Button onClick={props.onAdd} text={props.showAdd ? 'X' : '+'}/>
        </header>
        )
}

Header.defaultProps={
  title:'Título por defecto'
}

const headingStyle={
    color:'red',
    backgroundColor:'black'
}

export default Header
