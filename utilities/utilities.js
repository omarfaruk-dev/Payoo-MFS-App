//convert input field to number
function getInputValueByID(id){
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

//convert htmlElement(InnerText) to number
function getInnerTextByID(id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

//sum exiting HTML Element text value with new one
//let sum = 
function setInnerTextByIDandValue(id,value){
    document.getElementById(id).innerText =value;
}

// toggle function
function handleToggle(id,status){
    document.getElementById(id).style.display = status;
}

// Random number 
function generateRandomTxnId() {
    return Math.random().toString().slice(2, 10);
}

//current date and time
function getCurrentDateTime() {
    const currentDate = new Date();
    const dateTime =
        currentDate.getHours() + ":" +
        currentDate.getMinutes() + "  " +
        currentDate.getDate() + "/" +
        (currentDate.getMonth() + 1) + "/" +
        currentDate.getFullYear();

    return dateTime;
}
