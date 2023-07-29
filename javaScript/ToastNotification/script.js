const btn = document.querySelector('#btn')
const container = document.querySelector('#container')

btn.addEventListener('click', () => {
    creatNotification()
})

function creatNotification() {
    let notify = document.createElement('div');
    notify.classList.add('toast')
    notify.innerText = 'this challange is crazy!'

    container.appendChild(notify);

    setTimeout(() => {
        notify.remove()
    }, 3000)
}