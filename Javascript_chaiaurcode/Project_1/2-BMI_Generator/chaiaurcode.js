const form = document.querySelector('form');

//This will give you empty value.

//const height = parseInt(document.querySelector('#height').value);
form.addEventListener('submit',function(e){

    e.preventDefault(); //Don't submit the form

    const height = parseInt(document.querySelector('#height').value);

    const weight = parseInt(document.querySelector('#weight').value);

    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){

        results.innerHTML = "Please give valid height.."
    }else if(weight === '' || weight < 0 || isNaN(weight)){

        results.innerHTML = `Please give valid weight.. ${weight}`
    }
    else{

        const bmi =  (weight / ( (height * height)/10000)).toFixed(2);
        console.log(bmi);
        if(bmi < 18.6)
        {
            results.innerHTML = `<span> ${bmi} is Under Weight</spna>`;
        }
        else if(bmi >18.6 && bmi < 24.9)
        {
            results.innerHTML = `<span> ${bmi} is Normal Weight</spna>`;

        }
        else{

            results.innerHTML = `<span> ${bmi} is Over Weight</spna>`;
        }
            
    }

});