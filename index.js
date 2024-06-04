
window.onload = function () {
    try {
        let newCvs = localStorage.getItem("database");
        if (newCvs) {
            newCvs = JSON.parse(newCvs);
            database = database.concat(newCvs)
        }
    } catch (error) {
        console.log(error);
    }
    filterByName();
}

function goTocreateCV() {
    window.location.href='add-cv.html';
}



