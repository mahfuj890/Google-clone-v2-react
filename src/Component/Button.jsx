import './Button.scss'

function Button({type,title}) {
  return (
    <button type={type || "button"} className="default_btn">{title}</button>
  )
}

export default Button