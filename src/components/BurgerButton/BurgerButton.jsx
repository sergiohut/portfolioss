import "./BurgerButton.css"

const BurgerButton = (props) => {
  return (
    <>
    <div onClick={props.handleClick} className={`icono nav-icono-5 ${props.clicked ? 'open' : '' }`}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    </>
  )
}

export default BurgerButton