import styles from './title.module.css'

const constante = 'Os reds estão a flor da pele, cuidado!'
function Title (props){
  return(
    <h1 className={styles.Title}>
    {props.children}
    </h1> // variavel style mais a classname title, atrubuiu a cor do css
    
    )
}

export default Title