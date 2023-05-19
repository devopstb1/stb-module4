window.onload = function () {
    window.setTimeout(() => {
        document.getElementById('img-men').style.display = 'block'
    }, 2000);
    window.setTimeout(() => {
        document.getElementById('square').style.display = 'block'
        document.getElementById('audio44').play()

    }, 4700)
    window.setTimeout(() => {

        document.getElementById('para-class').style.display = 'block'
        let title = document.querySelector('.para-class');

        let name = 'पेटीएम जैसे एप्लीकेशंस में वॉलेट है लेकिन इससे यूपीआई भुगतान भी किए जाते हैं। पेटीएम में और भी सुविधाएं हैं। इससे डेबिट और क्रेडिट कार्ड के ज़रिये भी भुगतान किए जाते हैं।'

        let index = 1;
        const typewriter = () => {
            let new_title = name.slice(0, index);
            title.innerText = new_title;
            index++;
            setTimeout(() => {
                typewriter()

            }, 70)


        }
        typewriter()
    }, 6000)
    window.setTimeout(() => {
        document.getElementById('audio44').onplay
    }, 5000)
    window.setTimeout(() => {
        document.getElementById('small-image').style.display = 'block'
    }, 20000)
    window.setTimeout(() => {
        document.getElementById('back-button').classList.remove('back-button')
        document.getElementById('abcde').classList.remove('abcde')
        document.getElementById('back-button').classList.add('back-buttons')
    }, 22000)
    window.setTimeout(() => {
        document.getElementById('button_next').classList.remove('button_next')
        document.getElementById('pqrst').classList.remove('pqrst')
        document.getElementById('button_next').classList.add('buttons_next')

    }, 22000);


}

// let btnnext = document.querySelector('.button_next')
// let btnback = document.querySelector('.back-button')
