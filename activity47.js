window.onload = function () {
    window.setTimeout(() => {
        document.getElementById('img-men').style.display = 'block'
    }, 2000);
    window.setTimeout(() => {
        document.getElementById('square').style.display = 'block'
    }, 4000)
    window.setTimeout(() => {
        document.getElementById('audio47').play()

        document.getElementById('para-class').style.display = 'block'
        let title = document.querySelector('.para-class');

        let name = 'गूगल पे पर किसी भी लेन-देन से जुड़ी गलतियों के लिए अपने उस बैंक से संपर्क करें जहां आपका बचत खाता रजिस्टर्ड है। यह वही खाता होना चाहिए जो आपके गूगल पे वॉलेट से जुड़ा है।'

        let index = 1;
        const typewriter = () => {
            let new_title = name.slice(0, index);
            title.innerText = new_title;
            index++;
            setTimeout(() => {
                typewriter()

            }, 66)


        }
        typewriter()
    }, 5000)
    window.setTimeout(() => {
        document.getElementById('audio44').onplay
    }, 5000)
    // window.setTimeout(() => {
    //     document.getElementById('small-image').style.display = 'block'
    // }, 21000)
    window.setTimeout(() => {
        document.getElementById('back-button').classList.remove('back-button')
        document.getElementById('abcde').classList.remove('abcde')
        document.getElementById('back-button').classList.add('back-buttons')
    }, 21000)
    window.setTimeout(() => {
        document.getElementById('button_next').classList.remove('button_next')
        document.getElementById('pqrst').classList.remove('pqrst')
        document.getElementById('button_next').classList.add('buttons_next')

    }, 21000);


}

// let btnnext = document.querySelector('.button_next')
// let btnback = document.querySelector('.back-button')
