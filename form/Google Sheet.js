const scriptURL = "https://script.google.com/macros/s/AKfycbzyOqk97UE4kBSXSz_Shuxesx_zY6nVlDd-w2qUzPvPcdFX__YHxjeL1VGVfof55_Q4rQ/exec"

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})