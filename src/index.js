
// Base Starters
let currTessResetDate = new Date("June, 7, 2022 10:00:00");
let currXurResetDate = new Date("June, 3, 2022 10:00:00")

// getCountdown is taken from: https://www.w3schools.com/howto/howto_js_countdown.asp
function getCountdown (idName) {
    const now = new Date();
                
    if (idName == "tessTime") {
        distance = currTessResetDate - now;
    } else if (idName == "xurTime") {
        distance = currXurResetDate - now;
    }

    if (( now.getDate() == 2 && now.getHours() == 10) || (idName == "tessTime" && distance < 0)) {
        currTessResetDate = new Date(currTessResetDate.getFullYear(), currTessResetDate.getMonth(), currTessResetDate.getDate() + 7, currTessResetDate.getHours());
        distance = currTessResetDate - now;
    } else if ((now.getDate() == 5 && now.getHours() == 10) || (idName == "xurTime" && distance < 0)) {
        currXurResetDate = new Date(currXurResetDate.getFullYear(), currXurResetDate.getMonth(), currXurResetDate.getDate() + 7, currXurResetDate.getHours());
        distance = currXurResetDate - now;
    }
             
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);                    


    document.getElementById(idName).textContent = days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";        
}

setInterval(getCountdown, 1000, "tessTime");
setInterval(getCountdown, 1000, "xurTime");

let prevName, xurState, tessState; 

function openTab(tabName, name) {
    if (typeof xurState != 'undefined' && typeof tessState != 'undefined') {
        if (prevName == name) {
            tabDisplay(name);
        } else if (prevName != name) {
            tabDisplay(name);
        }
    }

    document.getElementById(tabName).style.display = "block";
    
    prevName = name;
    if (name == 'tess') {
        tessState = tabName;
    } else if (name == 'xur') {
        xurState = tabName;
    }
}

function tabDisplay(name) {
    if (name == 'tess') {
        document.getElementById(tessState).style.display = "none";
    } else if (name == 'xur') {
        document.getElementById(xurState).style.display = "none"; 
    }
}

document.getElementById('defaultTessOpen').click();
document.getElementById('defaultXurOpen').click();