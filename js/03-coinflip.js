let coinFlip = Math.round(Math.random())
let choice = prompt('Heads or Tails')

if(coinFlip==0)
{
    if(choice ==='Heads')
    {
        alert(`${coinFlip} The flip was heads and you chose heads...you win!`)
    }
    else
    {
       alert(`${coinFlip} The flip was heads but you chose tails...you lose!`)
    }
}
else {
    if(choice ==='Tails')
    {
        alert(`${coinFlip} The flip was tails and you chose tails...you win!`)

    }
    else
    {
        alert(`${coinFlip} The flip was tails but you chose heads...you lose!`)
    }
}