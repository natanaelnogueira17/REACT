import Head from 'next/head'
import Title from '../src/compenentes/title/Title'
import Subtitle from '../src/compenentes/subtitle/subtitle'
import Button from '../src/compenentes/Button/button'



function HomePage(){
  return(
    <>
    <Head>
      <title>Titulo diferente da home page</title>
    </Head>
    
    <div>
      <Title>Um titulo</Title> 
        <Subtitle>Esse é meu subtítulo</Subtitle>
          <p>Um paragrafo qualquer</p>
        <Title> outro titulo </Title>  
        <Subtitle>Esse é meu subtítulo</Subtitle> 
        <p>outro paragrafo qualquer</p>
        <Button>Botão teste</Button>            
    </div>
    
    </>
  )
}

export default HomePage