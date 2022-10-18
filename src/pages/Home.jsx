import React from 'react'
import FormHome from '../components/home/FormHome'
import "./styles/home.css"

const Home = () => {
  return (
    <article className='pokedex'>
      <img className='pokedex__img' src="./src/assets/pokedex.png" alt="" />
      <header className='pokedex__header'>
        <h2 className='pokedex__subtitle'>Hi trainer</h2>
        <p className='pokedex__text'>Type your name trainer</p>
      </header>

      <FormHome />
    </article>
  )
}

export default Home
