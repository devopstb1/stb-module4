window.onload = function () {
    window.setTimeout(() => {
        document.getElementById('main-cloud-div').style.display = 'block'

    }, 1000)
    window.setTimeout(() => {
        document.getElementById('headingmatching').play()

    }, 1700)
    window.setTimeout(() => {

        document.getElementById('quiz-h2').style.display = 'block'
        let title = document.querySelector('.quiz-h2');

        let name = 'डिजिटल पेमेंट्स ट्रेनिंग प्रोग्राम ?'

        let index = 1;
        const typewriter = () => {
            let new_title = name.slice(0, index);
            title.innerText = new_title;
            index++;
            setTimeout(() => {
                typewriter()

            }, 75)


        }
        typewriter()
    }, 2000)

    window.setTimeout(() => {

        document.getElementById('wrong1').style.display = 'block'
    }, 6000)
    window.setTimeout(() => {

        document.querySelector('.right1').style.display = 'block'
    }, 8000)
    window.setTimeout(() => {

        document.querySelector('.right2').style.display = 'block'
    }, 10000)
    window.setTimeout(() => {

        document.querySelector('.right3').style.display = 'block'
    }, 12000)
    window.setTimeout(() => {

        document.querySelector('.right4').style.display = 'block'
    }, 14000)
}



// var image = document.querySelector('.right');
let rightaudio = document.getElementById('rightaudio')
let button_next = document.getElementById('button_next')
let back_button = document.getElementById('back_button')
let abcde = document.getElementById('abcde')
let pqrst = document.getElementById('pqrst')







// trying new js concept in matching
let wrongimg = document.getElementById('wrong1')
let buzzsound = document.getElementById('buzz')

wrongimg.addEventListener('click', () => {
    wrongimg.src = 'images/wrong cloud1.png'
    buzzsound.play()
})


let rightimg2 = document.querySelector('.right2')
let rightimg1 = document.querySelector('.right1')

let rightimg3 = document.querySelector('.right3')
let rightimg4 = document.querySelector('.right4')

rightimg1.addEventListener('click', () => {
    rightimg1.src = 'images/right cloud2.png'
    rightaudio.play()
    
})



rightimg2.addEventListener('click', () => {
    rightimg2.src = 'images/right cloud3.png'
    rightaudio.play()
    

})



rightimg3.addEventListener('click', () => {
    rightimg3.src = 'images/right cloud4.png'
    rightaudio.play()

})


rightimg4.addEventListener('click', () => {
    rightimg4.src = 'images/right cloud5.png'
    rightaudio.play()

})





// let updateright = document.getElementById('updateright')

// updateright.addEventListener('click', () => {

// abcde.classList.remove('abcde')
// abcde.classList.add('abcdeable')
// pqrst.classList.remove('pqrst')
// pqrst.classList.add('pqrstable')

// button_next.classList.remove('button_next')

// button_next.classList.add('buttons_next')



// back_button.classList.remove('back_button')
// back_button.classList.add('back_buttons')
// })
