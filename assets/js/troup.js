function createDetails(profile, name, email, phoneNum,gender) {
    const holderElement = document.querySelector('.bsvBody');
    const peopleElement = document.createElement('div');
    const emailElement = document.createElement('div');
    const phoneNumElement = document.createElement('div');
    const genderElement = document.createElement('div');
    peopleElement.classList.add('people');
    emailElement.classList.add('email');
    phoneNumElement.classList.add('phoneNum');
    genderElement.classList.add('gender');
    peopleElement.innerHTML = `
        <div class="pF"><img src="${profile}"></div>
        <h3 class="gN">${name}</h3>
        <h3 class="gN">${email}</h3>
        <h3 class="gN">${phoneNum}</h3>
        <h3 class="gN">${gender}</h3>
    `;
    emailElement.innerHTML = `
        <div class="pF"><img src="${profile}"></div>
        <h3 class="gN">${name}</h3>
        <h3 class="gN">${email}</h3>
        <h3 class="gN">${phoneNum}</h3>
        <h3 class="gN">${gender}</h3>
    `;
      phoneNumElement.innerHTML = `
      <div class="pF"><img src="${profile}"></div>
      <h3 class="gN">${name}</h3>
      <h3 class="gN">${email}</h3>
      <h3 class="gN">${phoneNum}</h3>
      <h3 class="gN">${gender}</h3>
    `;
    genderElement.innerHTML = `
       <div class="pF"><img src="${profile}"></div>
        <h3 class="gN">${name}</h3>
        <h3 class="gN">${email}</h3>
        <h3 class="gN">${phoneNum}</h3>
        <h3 class="gN">${gender}</h3>
    `;

    holderElement.appendChild(peopleElement);
    const isFirstElement = document.querySelectorAll('.bsvBody .people').length === 1;
    if (isFirstElement) {
        peopleElement.style.margin = '2em auto auto auto';
    }

    // holderElement.appendChild(emailElement);
    // const isSecondElement = document.querySelectorAll('.bsvBody.email').length === 1;
    // if (isSecondElement) {
    //     emailElement.style.margin = '2em auto auto auto';
    // }
}

createDetails('re', 'Joseph<br>Jumbo', 'joseph<br>@gmail.com', '09078827012', 'Male')
createDetails('re', 'Daniel<br>Alison', 'daniel<br>@gmail.com', '09048785890', 'Male')
createDetails('re', 'Latifa<br>Jibri-Inu', 'latifa<br>@gmail.com', '07030497092', 'Female')
createDetails('re', 'Miracle<br>Edward', 'miracle<br>@gmail.com','09153117473', 'Male')
createDetails('re', 'Joseph<br>Jumbo', 'joseph<br>@gmail.com', '09078827012', 'Male')
createDetails('re', 'Daniel<br>Alison', 'daniel<br>@gmail.com', '09048785890', 'Male')
createDetails('re', 'Latifa<br>Jibri-Inu', 'latifa<br>@gmail.com', '07030497092', 'Female')
createDetails('re', 'Miracle<br>Edward', 'miracle<br>@gmail.com','09153117473', 'Male')
createDetails('re', 'Joseph<br>Jumbo', 'joseph<br>@gmail.com', '09078827012', 'Male')
createDetails('re', 'Daniel<br>Alison', 'daniel<br>@gmail.com', '09048785890', 'Male')
createDetails('re', 'Latifa<br>Jibri-Inu', 'latifa<br>@gmail.com', '07030497092', 'Female')
createDetails('re', 'Miracle<br>Edward', 'miracle<br>@gmail.com','09153117473', 'Male')
createDetails('re', 'Joseph<br>Jumbo', 'joseph<br>@gmail.com', '09078827012', 'Male')
createDetails('re', 'Daniel<br>Alison', 'daniel<br>@gmail.com', '09048785890', 'Male')
createDetails('re', 'Latifa<br>Jibri-Inu', 'latifa<br>@gmail.com', '07030497092', 'Female')
createDetails('re', 'Miracle<br>Edward', 'miracle<br>@gmail.com','09153117473', 'Male')
createDetails('re', 'Joseph<br>Jumbo', 'joseph<br>@gmail.com', '09078827012', 'Male')
createDetails('re', 'Daniel<br>Alison', 'daniel<br>@gmail.com', '09048785890', 'Male')
createDetails('re', 'Latifa<br>Jibri-Inu', 'latifa<br>@gmail.com', '07030497092', 'Female')
createDetails('re', 'Miracle<br>Edward', 'miracle<br>@gmail.com','09153117473', 'Male')
function handleSearch(){
    const input = document.querySelector('#inputS')

    input.addEventListener('input', ()=>{
        const cancle = document.querySelector('#xsearch')
        if (input.value.length > 1){
            cancle.style.background = 'green'
        }
    });
}

handleSearch()
