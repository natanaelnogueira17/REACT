//aqui serve para usar alteracoes globais, ou melhor importar arquivos com alterações globais

import Head from 'next/head'
import Title from '..///src/compenentes/title/Title'
import Subtitle from '..//src/compenentes/subtitle/subtitle'
function App({Component, pageProps}){

return (
<>
  <Head>Titulo Padrao</Head>
  <div>
    <Component {...pageProps}/>
    <Title> Um título</Title>
    <Subtitle text ='Um subtitulo'/>
    <Title>Outro Titulo</Title>
    <Subtitle text = 'Outro Subtitulo'/>
  </div>
</>
)
}

export default App