console.log("pooooooooooooooop")

const weatherForm=document.querySelector('form')
const search=document.querySelector('input')


weatherForm.addEventListener('submit',(e)=>{

    e.preventDefault()
    const val=search.value
    console.log(val)
})