let input = parseInt(prompt('Enter number between 1 and 100 '))

if (input >= 1 && input <= 100) {

        if (input >= 60 && input <= 69) {
            console.log('You received a D')

        }
        else if (input >= 70 && input <= 79) {
            console.log('You received a C')

        }

        else if (input >= 80 && input <= 89) {
            console.log('You received a B')

        }

        else if (input >= 90 && input <= 100) {
            console.log('You received a A')

        }

        else{
            console.log('You received a F')

    }
}
else {
    prompt('numbers between 1 and 100 are accepted')
}