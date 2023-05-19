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

        let name = 'टर्मिनोलॉजिस का इस्तेमाल करते वक्त सभी स्टाफ को ध्यान देना चाहिए। जैसे की — मोबाइल वॉलेट यूपीआई से कैसे अलग है?'

        let index = 1;
        const typewriter = () => {
            let new_title = name.slice(0, index);
            title.innerText = new_title;
            index++;
            setTimeout(() => {
                typewriter()

            }, 69)


        }
        typewriter()
    }, 5000)

    window.setTimeout(() => {
        document.getElementById('small-image').style.display = 'block'
    }, 14000)
    window.setTimeout(() => {
        document.getElementById('back-button').classList.remove('back-button')
        document.getElementById('abcde').classList.remove('abcde')
        document.getElementById('back-button').classList.add('back-buttons')
    }, 16000)
    window.setTimeout(() => {
        document.getElementById('button_next').classList.remove('button_next')
        document.getElementById('pqrst').classList.remove('pqrst')
        document.getElementById('button_next').classList.add('buttons_next')

    }, 16000);


}

// let btnnext = document.querySelector('.button_next')
// let btnback = document.querySelector('.back-button')
