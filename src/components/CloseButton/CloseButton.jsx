import "./CloseButton.css"

const CloseButton = (props) => {
  return (
    <div onClick={props.handleClick} className={`closeBtn ${props.clicked ? 'open' : '' }`}>
        <span></span>
        <span></span>
    </div>
  )
}

export default CloseButton