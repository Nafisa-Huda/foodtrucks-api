document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const stateName = document.querySelector('input').value
    try{
        const response = await fetch(`https://foodtruck-by-state-api.herokuapp.com/states/${stateName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('.name').innerText = data.name
        document.querySelector('.cuisine').innerText = data.cuisine
    }catch(error){
        console.log(error)
    }
}
