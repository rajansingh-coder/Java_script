const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `please enter the valid Height ${height}`
    }

    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `please enter the valid weight ${weight}`
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        let category = ''
        if (bmi <14){
            category = " Under Weight"
        }
       else if ( bmi <= 23.5){
        category = "Normal weight"
       }
       else{
        category = " Overweight"
       }
   
        // show the result 
        result.innerHTML = `<span>${bmi}  -  ${category}</span>`
    }
  
})