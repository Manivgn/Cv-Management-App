
let index = 0 ;


function getID(parameter) {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get(parameter);
 }

function init(id) {
    clean();
    let cv = database.find(cv => cv.id == id);
    if (cv) {
        setUpCv(cv);
        index = id ;
    }
    else{
        console.log(false);
    }
}

function goToPrevious() {
    if(index > 1 && index <= database.length+1 ){
        clean();
        index--;
        let cv = database.find(cv => cv.id === index);
        setUpCv(cv);
    }
    else{
        console.log("Previous element doesnt exists");
    }

   
}

 function goToNext() {
    if(index >=1 && index < database.length+1 ){
        clean();
        index++;
        let cv = database.find(cv => cv.id === index);
        setUpCv(cv);
    }
    else{
        console.log("Next element doesnt exists");       
    }
}

 function goToFirst() {
    if (index !== 1 ) {
        clean();
        index = 1 ;
        let cv = database.find(cv => cv.id === 1);
        setUpCv(cv);
    }
}

function goToLast() {
    let lastindex = database.length ;
    if (index != lastindex) {
        clean();
        index = lastindex ;
        let cv = database.find(cv => cv.id === index);
        setUpCv(cv);

    }
}

function clean() {
    let headerdiv = document.getElementsByClassName('header-profile')[0];
    if (headerdiv) {
        while (headerdiv.firstChild) {
            headerdiv.removeChild(headerdiv.firstChild);
        }    
    }

    let maincontent = document.getElementsByClassName('main-content')[0];
    if (maincontent) {
        while (maincontent.firstChild) {
            maincontent.removeChild(maincontent.firstChild);
        }
    }

    let sidebar = document.getElementsByClassName('sidebar')[0];
    if (sidebar) {
        while (sidebar.firstChild) {
            sidebar.removeChild(sidebar.firstChild);
        }    
    }
    
}

function changeStyling() {
    let cvstyling = document.getElementById('cvstyling');
    console.log(cvstyling);
    let styleelection = document.getElementById('style-options').value;
    switch (styleelection) {
        case "layout1":
            cvstyling.setAttribute('href',  `./css/layout-1.css`);
        break;
    
        case "layout2":
            cvstyling.setAttribute('href', './css/layout-2.css');
        break;
        
        case "layout3":
            cvstyling.setAttribute('href', './css/layout-3.css');
        break;

        case "layout5":
            cvstyling.setAttribute('href', './css/layout-5.css');
        break;
    
        default: 
            cvstyling.setAttribute('href', './css/layout-4.css');
            break;
    }
 }


 function downloadCV() {
    //TODO
 }

 /*
 function disablebuttonNext() {
    if (index <= databaselength +1) {
        document.getElementById('next').disabled = false;
        document.getElementById('last').disabled = false;
        console.log('in function disablenext');
    }
    else{
        document.getElementById('next').disabled = true;
        document.getElementById('last').disabled = true;
    }
 }

 function disablebuttonPrevious() {
    if (index !== 1) {
        document.getElementById('previous').disabled = false;
        document.getElementById('first').disabled = false;
        console.log('in function disableprevious');
    }
    else{
        document.getElementById('previous').disabled = true;
        document.getElementById('first').disabled = true;
    }
 }
*/
