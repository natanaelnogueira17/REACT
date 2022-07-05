/*exemplo de componente react com props(children)   */


import styles from './title.module.css'


function Title (props){ //props sao imutaveis, inalteraveis
  return(
    <h1 className={styles.Title}>
    {props.children}
    </h1> // variavel style mais a classname title, atrubuiu a cor do css
    
    )
}

export default Title