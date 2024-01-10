const walkText = [
        "Hey guys! Today we will look at everything to do with hooks that we have learned so far! I will be discussing this as we go through and feel free to ask questions along the way! The repo will be a handy reference for you in the future. Click on this text to advance the instructions.",
        "We use useState to INITIALIZE a variable that we want to change, in other words, the initial STATE of a variable. Click 'evolve' to continue.",
        "As we call the onclick handler, we can see the state has updated for our pokemon and they have SET themselves as their evolved version.",
        "Our pokemon has 3 states, but what if Charizard gets attacked? Lets useEffect to use our useWaterGun custom hook on Charizard's tail!",
        "You are so evil! Charmander and its evolutions die if their flames are extingushed! But notice how useEffect only triggered our useWaterGun when Charmander was fully evolved!",
        "useEffect takes 2 arguments, the first is a callback function, the code we want to trigger, the second is the variable, or STATE we are listening for.",
        "If we only pass the one argument, then the callback is triggered at every re-render of your component/app, with the second argument, we are saying only to activate IF that state changes. useEffect is essentially a 'add event listener', listening for the state to change!"
];

export default walkText;