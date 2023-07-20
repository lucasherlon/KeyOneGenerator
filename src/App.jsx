import './App.css'
import Keyone from './assets/miniKeyone.jpg'
import Frase from './components/Frase.jsx'
import { useState } from 'react'

function Header() {
  return (
    <header className='app--head'>
      <h1 className='h1--header'>KeyOne Motivational Generator</h1>
      <h1 className='h1--header--media'>KeyOne</h1>
    </header>
  )
}

function Footer() {
  return (
    <footer className='app--footer'>
      <p><span>Site feito por Lucas Herlon</span>© Todos os direitos reservados</p>
    </footer>
  )
}

function Main() {
  const [index, setIndex] = useState(0)
  return (
    <main className='app--main'>
      <figure className='app-photo'>
        <img src={Keyone} alt='mini Keyone photo' className='app-keyone' />
      </figure>
      <section className='app--box'>
        <button onClick={() => setIndex(Math.floor(Math.random() * 29))}>Gerar frase motivacional</button>
        <section className='app--text'>
          <Frase index={index} />
        </section>
        <button onClick={() => setIndex(100)}>Clique para Agradecer &#128591;</button>
      </section>
    </main>
  )
}

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
