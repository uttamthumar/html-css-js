let isDOBOpen = false;
let DateOfBirth;
const settingcogEl = document.getElementById("cog");
const settingcontentEl = document.getElementById("settingscontent");
const initialEl = document.getElementById("initial");
const afterDOBButtonEl = document.getElementById("afterDOBButton")
const dobbuttonEl = document.getElementById("dobbutton")
const dobinputEl = document.getElementById("dobinput")
const yearEl = document.getElementById("year")
const monthEl = document.getElementById("month")
const dayEl = document.getElementById("day")
const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minute")
const secondEl = document.getElementById("second")


const toggleDateOfBirthSelector = () => {
    if (isDOBOpen) {
        settingcontentEl.classList.add("hide");
    } else {
        settingcontentEl.classList.remove("hide");
    }
    isDOBOpen = !isDOBOpen;
    console.log("Toogle", isDOBOpen);
};
const updateAge = () => {
    const currentDate = new Date();
    const datediff = currentDate - DateOfBirth;
    const year = Math.floor(datediff / (1000 * 60 * 60 * 24 * 365));
    const month = Math.floor(datediff / (1000 * 60 * 60 * 24 * 365)) % 12;
    const day = Math.floor(datediff / (1000 * 60 * 60 * 24)) % 30;
    const hour = Math.floor(datediff / (1000 * 60 * 60)) % 24;
    const minute = Math.floor(datediff / (1000 * 60)) % 60;
    const second = Math.floor(datediff / 1000) % 60;
    yearEl.innerHTML = year;
    monthEl.innerHTML = month;
    dayEl.innerHTML = day;
    hourEl.innerHTML = hour;
    minuteEl.innerHTML = minute;
    secondEl.innerHTML = second;
};
const setDOBHandler = () => {
    const datestring = dobinputEl.value;
    DateOfBirth = new Date(datestring);
    if (DateOfBirth) {
        initialEl.classList.add("hide");
        afterDOBButtonEl.classList.remove("hide")
        updateAge();
    } else {
        afterDOBButtonEl.classList.add('hide');
        initialEl.classList.remove('hide');
    }
};

setDOBHandler();

settingcogEl.addEventListener("click", toggleDateOfBirthSelector);
settingcogEl.addEventListener("click", setDOBHandler);