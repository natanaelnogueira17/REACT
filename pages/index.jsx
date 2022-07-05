import Title from '../src/compenentes/title/Title'
import Subtitle from '../src/compenentes/subtitle/subtitle'


function HomePage(){
  return(
    <div>
      <Title>Um titulo</Title> 
        <Subtitle>Esse é meu subtítulo</Subtitle>
          <p>Um paragrafo qualquer</p>
      <Title> outro titulo </Title>  
      <Subtitle>Esse é meu subtítulo</Subtitle> 
      <p>outro paragrafo qualquer</p>
    </div>
  )
}

export default HomePage