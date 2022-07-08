import style from './button.module.css'

function Button ({children, onClick}){
  return(
    <button className={style.button} 
    onClick={onClick}
    >
      {children}
      </button>
  )

}

export default Button