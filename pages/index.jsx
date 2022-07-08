import {useState} from 'react'
import Head from 'next/head'
import Title from '../src/compenentes/title/Title'
import Subtitle from '../src/compenentes/subtitle/subtitle'
import Button from '../src/compenentes/button/button'



function HomePage(){
const [click, setClick] = useState(0)

  const handleClick = () =>{   
setClick(click + 1)
  
  }

  
  return(
    <>
    <Head>
      <title>Titulo diferente da home page</title>
    </Head>
    
    <div>
      <Title>Um título</Title> 
        <Subtitle text = "Um subtítulo">Esse é meu subtítulo</Subtitle>
          <p>Um paragrafo qualquer</p>
        <Title> outro título </Title>  
        <Subtitle>Esse é meu subtítulo</Subtitle> 
        <Button 
        onClick={handleClick}
        
        >
          Botão teste
        </Button>
        <p>clicks: {click}</p>
         
                 
    </div>
    
    </>
  )
}

export default HomePage