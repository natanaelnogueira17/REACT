/*exemplo de componente react com props(children)   */


function Subtitle(props){ // ou pode ser assim function Subtitle({}children}){
                          // alteraria tbm la no h4  <h4>{children} </h4>
return(
  <h4>{props.children} </h4> // variavel style mais a classname title, atrubuiu a cor do css
  
  )
}

export default Subtitle