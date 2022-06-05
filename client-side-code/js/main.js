document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const state = document.querySelector('input').value
    try{
        const response = await fetch(`https://foodtruck-by-state-api.herokuapp.com/${state}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.name
    }catch(error){
        console.log(error)
    }
}