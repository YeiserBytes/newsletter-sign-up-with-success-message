const card = document.querySelector('.card')
const form = document.querySelector('#form-submit')


form.addEventListener('submit', (e) => {
	e.preventDefault()
	const formData = new FormData(form)

    card.innerHTML = `
        <section class="card-info">
        <img src="../assets/images/icon-success.svg" alt="">
        <h1 class="submit-title" style="max-width:9ch;width:100%;border-radius:.8em;">Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to <b>${formData.get(
            'email'
        )}</b>. Please open it and click the button inside to confirm your subscription.</p>
        <button class="btn-dismiss" style="padding:1em;">Dismiss message</button>
        </section>
    `
    const btnDismiss = document.querySelector('.btn-dismiss')

    btnDismiss.addEventListener('click', () => {
        location.reload()
    })
	form.reset()
})
