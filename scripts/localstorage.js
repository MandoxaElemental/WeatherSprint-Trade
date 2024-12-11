
function saveToLocalStorage(country){
    let countryArr = getFromLocalStorage();

    if(!countryArr.includes(country)){
        countryArr.push(country);
    }

    localStorage.setItem('countrysaved', JSON.stringify(countryArr))
}

function getFromLocalStorage(){
    let localStorageData = localStorage.getItem('countrysaved');

    if(localStorageData == null){
        return [];
    }

    return JSON.parse(localStorageData);

}

function removeFromLocalStorage(country){
    let localStorageData = getFromLocalStorage();

    let countryIndex =  localStorageData.indexOf(country);

    localStorageData.splice(countryIndex, 1);

    localStorage.setItem('countrysaved', JSON.stringify(localStorageData))
}

export{saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage}