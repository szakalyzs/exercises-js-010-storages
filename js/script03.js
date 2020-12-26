'use strict';

let users=[];

async function request() {   
    try {
        const result = JSON.parse(localStorage.getItem('users'));
        show(result.users,'From localStorage:');
    } catch (error) {
        console.error(error);
        try {
            const response = await fetch('../data/db.json');
            const result = await response.json();
            show(result.users,'From dataFile:');
            store(result);
        } catch(error) {
            console.error(error);
        }
    }
    
}

function show(data,title) {
    document.body.insertAdjacentHTML('beforeend', `<h2>${title}</h2>`);
    let actor = `<div>`;
    for (let item of data) {
        actor += `<p>${item.firstName} ${item.lastName}</p>`;
    }
    actor += `</div>`;
    document.body.insertAdjacentHTML('beforeend', actor);

}

function store(data) {
    localStorage.setItem('users', JSON.stringify(data));
}


request();