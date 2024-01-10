import { useState, useEffect } from 'react';
import './App.css';
import walkText from './textFiles/walkText';
import pokeList from './textFiles/pokeList';

const { charmander, charmeleon, charizard } = pokeList;

function App() {


  const [pokemon, setPokemon] = useState(charmander);
  const [walkthrough, setWalkthrough] = useState(walkText[0]);

  console.log(charmander);
  const handleEvolutionClick = () => {
    if (pokemon.name === 'Charmander') {
      setPokemon(charmeleon);
      setWalkthrough(walkText[2])
    } else if ( pokemon.name === 'Charmeleon') {
      setPokemon(charizard);
    } else {
      console.log("Charizard cannot evolve further!");
    }
  }

  const handleIntroTextClick = () => {
    setWalkthrough(walkText[1]);
    // removeEventListener('click');
  }

  const reset = () => {
    setPokemon(charmander);
    setWalkthrough(walkText[0])
  }

  return (
    <div className='grid grid-rows-5 h-screen gap-2'>
      <img src={pokemon.image} alt='our current pokemon' className='w-60 h-60 m-auto rounded-full text-center' />
      <p className='text-center row-start-2 m-auto'>{pokemon.name}</p>
      <button className='center m-auto bg-slate-200 w-28 h-20 rounded-2xl border-4' onClick={handleEvolutionClick}>Evolve!</button>
      <p className='text-center' onClick={handleIntroTextClick}>{walkthrough}</p>
      <button className='center m-auto bg-slate-200 w-28 h-20 rounded-2xl border-4' onClick={reset}>Reset Walkthrough.</button>
    </div>
  );
}

export default App
