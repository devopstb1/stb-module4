window.onload = function () {
    window.setTimeout(() => {
        document.getElementById('img-men').style.display = 'block'
    }, 2000);
    window.setTimeout(() => {
        document.getElementById('square').style.display = 'block'
    }, 4000)
    window.setTimeout(() => {
        document.getElementById('audio44').play()

        document.getElementById('para-class').style.display = 'block'
        let title = document.querySelector('.para-class');

        let name = 'याद रखें, भले ही हम गूगल पे के ज़रिये डिजिटल पेमेंट के सफर को शुरू करने का तरीका दिखाते हैं। हमें ग्राहकों को यह बताना चाहिए कि यूपीआई भुगतान करने के लिए कई तरीके हैं। जैसे - पेटीएम, फोन पे इत्यादि। समय की कमी की वजह से हमने सिर्फ गूगल पे को दिखाया है।'

        let index = 1;
        const typewriter = () => {
            let new_title = name.slice(0, index);
            title.innerText = new_title;
            index++;
            setTimeout(() => {
                typewriter()

            }, 76)


        }
        typewriter()
    }, 5000)

    window.setTimeout(() => {
        document.getElementById('small-image').style.display = 'block'
    }, 25000)
    window.setTimeout(() => {
        document.getElementById('back-button').classList.remove('back-button')
        document.getElementById('abcde').classList.remove('abcde')
        document.getElementById('back-button').classList.add('back-buttons')
    }, 28000)
    window.setTimeout(() => {
        document.getElementById('button_next').classList.remove('button_next')
        document.getElementById('pqrst').classList.remove('pqrst')
        document.getElementById('button_next').classList.add('buttons_next')

    }, 28000);


}

// let btnnext = document.querySelector('.button_next')
// let btnback = document.querySelector('.back-button')
