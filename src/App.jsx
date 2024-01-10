/**
 * HI ALL!!! Welcome to our tutorial on hooks, this codebase is here for your reference, I will start 
 * by simply changing state depending on conditionals and how far along we are, I havent taken edge cases
 * or error handling into effect, so make sure you are reading everything on screen, if anything goes wrong,
 * simply click "RESET" at the bottom of the screen. 
 * 
 * As this was created to discuss with a group, I have kept the comments as informative as I can but also trying 
 * to not overcomplicate things. I want to try and help you with the concepts and how we can do different things with them
 * 
 * I will talk you through the codebase, after tonight please do star the repo or use it as reference, any questions as we walk 
 * through then let me know, if you come back to this with questions then drop me a slack or linkedIn message and ill
 * do my best to answer those for you :) 
 * 
 * remember, the React docs will be your BEST source of information on the mechanics, they can be found here:
 * 
 *  https://react.dev/
 * 
 */


// imports, when importing default hooks, we use destructuring to only pull the REQUIRED hooks from the library
import { useState, useEffect } from 'react';
// import custom css
import './App.css';
// our variables are imported from their respective files
import walkText from './textFiles/walkText';
// pokelist contains our pokemon objects
import pokeList from './textFiles/pokeList';
import useWaterGun from './utils/useWaterGun';

// destructure the list into the respective pokemon
const { charmander, charmeleon, charizard } = pokeList;

// variable to track walkthrough steps <<<------- IMPORTANT!!!! THIS IS POOR NAMING CONVENTION, IM JUST LAZY!!
let i = 0;

// app function declaration, setup via create vite@latest
function App() {

  // STATE INITIALIZERS -------------------------------------------------<>

  // Our useState initialization, using array destructuring to declare a variable (pokemon)
  // and declaring our SET methods (setPokemon)
  // useState is what we are destructuring, a React specific method from the react library, we pass the argument of what we want the
  // INITIAL value to be

  // pokemon state
  const [pokemon, setPokemon] = useState(charmander);
  // walkthrough text state
  const [walkthrough, setWalkthrough] = useState(walkText[i]);
  // button text state
  const [buttonText, setButtonText] = useState('Evolve');

  // useEffect handler, 2 params, callback and state listener this effect will trigger on pokemon state changes.
  useEffect(() => {
    // this use effect hook, tracks pokemon evolutions, it will trigger text changes for the walkthrough

    // switch case for each pokemon
    switch(pokemon.name) {
      case 'Charmander':
        i++;
        setWalkthrough(walkText[i]);
        break;
      case 'Charmeleon':
        i++;
        setWalkthrough(walkText[i]);
        break;
      case 'Charizard':
        i++;
        setWalkthrough(walkText[i]);
        setButtonText('useWaterGun');
        break;
      default:
        return;
    }
    console.log(`should be ++`, i);
  }, [pokemon])

  // WALKTHROUGH TEXT HANDLERS ------------------------------------------<>

  // custom onclick handler to determine walkthrough text on intro
  const handleIntroTextClick = () => {
    if (i > 0) return;
    i++;
    console.log('step 1, should be 1: ', i);
    setWalkthrough(walkText[i]);
  }

  // STATE CHANGES (EVOLVE) -----------------------------------------------<>

  // click handler to determine pokemon evolution, or STATE changes
  const handleEvolutionClick = () => {
    // if statement to find current state and ensure steps arent missed
    if (pokemon.name === 'Charmander') {
       // set new pokemon state
      setPokemon(charmeleon);
    
    // update dependant on what pokemon came before.
    } else if ( pokemon.name === 'Charmeleon') {
      // set new pokemon
      setPokemon(charizard);
    } else if (pokemon.name === 'Charizard') {
      let newPoke = useWaterGun();
      setPokemon(newPoke);
    }

  }

  // RESET TUTORIAL -------------------------------------------------------<>

  // reset walkthrough to initial state values
  const reset = () => {
    setPokemon(charmander);
    i = 0;
    console.log("reset, should be 0:", i);
    setWalkthrough(walkText[i]);
    setButtonText('Evolve');
  }

  // Our returned HTML elements
  return (
    // Container Div
    <div className='grid 
                    grid-rows-5 
                    h-screen 
                    gap-2
                    p-20'>

      {/* Image of our current pokemon */}
      <img src={pokemon.image} 
            alt='our current pokemon' 
            className='w-60 
                      h-60 
                      m-auto 
                      rounded-full 
                      text-center' />
      
      {/* Pokemon Name */}
      <p className='text-center 
                    row-start-2 
                    m-auto
                    mt-28'>
          {/* using our current pokemon (state)'s name which will update/rerender as the state changes */}
          {pokemon.name}
      </p>

      {/* Walkthrough text */}
      <p className='text-center' 
          onClick={handleIntroTextClick}>
            {/* walkthrough text which will change as we walk through the tutorial as its state changes */}
            {walkthrough}
      </p>

      {/* Evolve Button */}
      <button className='center 
                        m-auto 
                        bg-slate-200 
                        w-28 h-20 
                        rounded-2xl 
                        border-4' 
              // We set an onclick handler to a custom function, this is where we will update state as we want it to.
              onClick={handleEvolutionClick}>
                {buttonText}
      </button>

      {/* Reset Button */}
      <button className='center 
                        m-auto 
                        bg-slate-200
                        w-28 
                        h-20 
                        rounded-2xl 
                        border-4' 
              // Custom function to reset walkthrough states to initial values
              onClick={reset}>
              Reset
      </button>

    </div>
  );
}

export default App
