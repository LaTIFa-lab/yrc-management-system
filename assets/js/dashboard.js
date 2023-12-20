function createPeople(profile, name) {
    const holderElement = document.querySelector('.bsvBody');
    const peopleElement = document.createElement('div');
    peopleElement.classList.add('people');
    peopleElement.innerHTML = `
        <div class="pF"><img src="${profile}"></div>
        <h3 class="nM">${name}</h3>
    `;
    holderElement.appendChild(peopleElement);
    const isFirstElement = document.querySelectorAll('.bsvBody .people').length === 1;
    if (isFirstElement) {
        peopleElement.style.margin = '2em auto auto auto';
    }
}


createPeople('re', 'joseph')
createPeople('re', 'daniel')
createPeople('re', 'latifa')
createPeople('re', 'miracle')
createPeople('re', 'joseph')
createPeople('re', 'daniel')
createPeople('re', 'latifa')
createPeople('re', 'miracle')
createPeople('re', 'joseph')
createPeople('re', 'daniel')
createPeople('re', 'latifa')
createPeople('re', 'miracle')
createPeople('re', 'joseph')
createPeople('re', 'daniel')
createPeople('re', 'latifa')
createPeople('re', 'miracle')
createPeople('re', 'joseph')
createPeople('re', 'daniel')
createPeople('re', 'latifa')
createPeople('re', 'miracle')


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