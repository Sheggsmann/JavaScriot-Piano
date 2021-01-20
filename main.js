const sounds = document.querySelectorAll('.sound')
const buttons = document.querySelectorAll('.btn')

// KEY MAPPINGS:

// keyMappings = {
//     'a': playSound(button[0], 0)
//     's': playSound(buttons[1], 1),
//     'd': playSound(buttons[2], 2),
//     'f': playSound(buttons[3], 3),
//     'g': playSound(buttons[4], 4),
//     'h': playSound(buttons[5], 5)
// }


// Listen for the keypresses
window.addEventListener('keypress', e => {
    switch(e.key) {
        case 'a':
            playSound(buttons[0], 0)
            break       
        case 's':
            playSound(buttons[1], 1)
            break
        case 'd':
            playSound(buttons[2], 2)
            break
        case 'f':
            playSound(buttons[3], 3)
            break
        case 'g':
            playSound(buttons[4], 4)
            break
        case 'h':
            playSound(buttons[5], 5)
            break
    }
})

// Listen for the button clicks
buttons.forEach((button, index) => {
        button.addEventListener('click', e => {
            let current = e.target
            
        if (current.classList.contains('main-inner')) {
            current = current.parentElement.parentElement;
        }
        playSound(current, index)        
    })
})


// Function to play sound and activate color animation
function playSound(target, index) {
    if (target.className === 'btn') {
        target = target.firstElementChild
    }
    target.classList.add('pressed')
    setTimeout(() => {
        target.classList.remove('pressed')
    }, 120)

    sounds[index].currentTime = 0
    sounds[index].play()
}