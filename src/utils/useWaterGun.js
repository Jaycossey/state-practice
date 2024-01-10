// Our Custom Hook is called useWaterGun, more on that later
/**
 * Custom hooks are functions, these functions have to return something. Thats it.
 * 
 * They are simply re-usable logic that we import to the "global" component, we would
 * use a custom hook if React doesnt have a hook that we need. Think about an API call,
 * we dont want to write:
 * 
 * fetch(url)
 *  .then((res) => {
 * })......... etc
 * 
 * everytime we want to make a call, it would be very repetetive and lets face it, we want
 * to be lazy, so we could create a reusable function, or hook, to handle this for us and 
 * call it when we need to.
 */

/**
 * our custom hook, useWaterGun, will spray water on our pokemon's tail, and return a new
 * pokemon state. 
 * 
 */

const useWaterGun = () => {

    // you know this already
    const deadPokemon = {
        image: './src/images/deadChar.png',
        name: 'Charizard',
        text: 'Its dead, you killed it.'
    }
    
    // return the results of your actions 
    return deadPokemon;
}

export default useWaterGun;