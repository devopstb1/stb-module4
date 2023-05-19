window.onload = function () {
    window.setTimeout(() => {
        document.getElementById('img-men').style.display = 'block'
    }, 2000);
    window.setTimeout(() => {
        document.getElementById('square').style.display = 'block'
        document.getElementById('audio48').play()
    }, 4400)

    window.setTimeout(() => {


        document.getElementById('para-class').style.display = 'block'
        let title = document.querySelector('.para-class');

        let name = 'अगर आप अपने ग्राहकों को पिन या पासवर्ड बनाने में उनकी मदद करना चाहते हैं, तो आपको उन्हें सबसे पहले बताना होगा कि क्यों अपना पिन और पासवर्ड किसी को नहीं देना चाहिए। जिसमे आप भी शामिल हैं।'

        let index = 1;
        const typewriter = () => {
            let new_title = name.slice(0, index);
            title.innerText = new_title;
            index++;
            setTimeout(() => {
                typewriter()

            }, 77)


        }
        typewriter()
    }, 5000)
    window.setTimeout(() => {
        document.getElementById('audio44').onplay
    }, 5000)
    window.setTimeout(() => {
        document.getElementById('small-image').style.display = 'block'
    }, 21000)
    window.setTimeout(() => {
        document.getElementById('back-button').classList.remove('back-button')
        document.getElementById('abcde').classList.remove('abcde')
        document.getElementById('back-button').classList.add('back-buttons')
    }, 23000)
    window.setTimeout(() => {
        document.getElementById('button_next').classList.remove('button_next')
        document.getElementById('pqrst').classList.remove('pqrst')
        document.getElementById('button_next').classList.add('buttons_next')

    }, 23000);


}

// let btnnext = document.querySelector('.button_next')
// let btnback = document.querySelector('.back-button')
