window.onload = function () {
    window.setTimeout(() => {
        document.getElementById('img-men').style.display = 'block'
    }, 2000);
    window.setTimeout(() => {
        document.getElementById('square').style.display = 'block'
    }, 4000)
    window.setTimeout(() => {
        document.getElementById('audio51').play()

        document.getElementById('para-class').style.display = 'block'
        let title = document.querySelector('.para-class');

        let name = 'ऑल द बेस्ट। अब आप ट्रेनिंग के लिए तैयार हैं।'

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
    }, 5000)
    window.setTimeout(() => {
        document.getElementById('audio44').onplay
    }, 5000)
    // window.setTimeout(() => {
    //     document.getElementById('small-image').style.display = 'block'
    // }, 22000)
    window.setTimeout(() => {
        document.getElementById('back-button').classList.remove('back-button')
        document.getElementById('abcde').classList.remove('abcde')
        document.getElementById('back-button').classList.add('back-buttons')
    }, 10000)
    // window.setTimeout(() => {
    //     document.getElementById('button_next').classList.remove('button_next')
    //     document.getElementById('pqrst').classList.remove('pqrst')
    //     document.getElementById('button_next').classList.add('buttons_next')

    // }, 24000);


}

// let btnnext = document.querySelector('.button_next')
// let btnback = document.querySelector('.back-button')
