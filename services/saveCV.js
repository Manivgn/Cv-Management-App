function saveCV() {
    let submit = document.getElementById('submit');
    submit.addEventListener('click', function(event){
        event.preventDefault();
        try {
            const lastID = database.length;
            newID = lastID + 1;

            let newCV = buildCV(newID);
            if (newCV) {
                console.log(newCV);
                if(localStorage.getItem("database") === null){
                    localStorage.setItem("database", JSON.stringify([]));
                }
                let tmpdatabase = JSON.parse(localStorage.getItem("database"));
                tmpdatabase.push(newCV);
                localStorage.setItem("database", JSON.stringify(tmpdatabase));
                window.location.href='index.html';
            }
            else{
                alert('Your Operation did not complete !');
            }
            
        } catch (error) {
            console.log(error);
        }   
    })
}


function buildCV(id) {
        let CV = { };
        CV.id = id;
        getProfile(CV);
        getEducation(CV);
        getTechnology(CV);
        getExperience(CV);
        getLanguages(CV);
        getSoftSkills(CV);
        getInterests(CV);
        return CV ;
}


function getProfile(CV) {
    try {
    let profile = { } ;
    const profilepicture = document.getElementById('profilepicture').value;
    profile.photo = profilepicture;

    const firstName = document.getElementById('firstName').value;
    profile.firstName = firstName;

    const lastName = document.getElementById('lastName').value;
    profile.lastName = lastName;

    const birthday = document.getElementById('birthday').value.split('-');
    let birth = {} ;
    birth.year = birthday[0];
    birth.month = birthday[1];
    birth.day = birthday[2];
    profile.birthday = birth;

    const phonenumber = document.getElementById('phonenumber').value;
    profile.phone = phonenumber;

    const email = document.getElementById('email').value;
    profile.email = email;

    const address = document.getElementById('address').value;
    profile.address = address ;

    const professionalSummary = document.getElementById('professionalsummary').value;
    profile.professionalSummary = professionalSummary;

    let profilelinks = [];
    const links = document.getElementById('link').value.split(',');
    links.forEach(element => {
        profilelinks.push(element);
    });
    profile.links = profilelinks;

    CV.profile = profile;

    } catch (error) {
        console.log(error);
    }
}

function getEducation(CV) {
    try {
        let education = [];
        const formdiplomas = document.getElementsByClassName('education-content');
        const diplomaslength =  formdiplomas.length;
        for (let i = 0; i < diplomaslength; i++) {
            const diplomaelement = formdiplomas[i];
            let diploma = { };
            const diplomatitle = diplomaelement.querySelector('#diploma').value;
            const organisation = diplomaelement.querySelector('#organisation').value;
            const year = diplomaelement.querySelector('#diplomayear').value;
            diploma.diploma = diplomatitle ;
            diploma.organisation = organisation;
            diploma.year = year;
            education.push(diploma);
        }
        
    CV.education = education ;
    } catch (error) {
        console.log(error);
    }
   
   
}

function getTechnology(CV) {
    try {
        let technologies = [];
    const formtechnologies =  document.getElementsByClassName('technology-content');
    const length = formtechnologies.length ;
    for (let i = 0; i < length; i++) {
        const technologyitem = formtechnologies[i];
        let technology = { };
        const technologytitle = technologyitem.querySelector('#technology').value;
        const details = [];
        const detailsitems = technologyitem.getElementsByClassName('detail');
        const detailsitemslength = detailsitems.length;
        for (let i = 0; i < detailsitemslength; i++) {
            if (detailsitems[i].value) {
            details.push(detailsitems[i].value);
            }
        }
        technology.skill = technologytitle ;
        technology.details = details;
        technologies.push(technology);
    }
    CV.technologySkills = technologies;
    } catch (error) {
        console.log(error);
    }
}
function getExperience(CV) {
    try {
    let experiences = [];
        const formexperiences =  document.getElementsByClassName('experience-content');
        const experiencelength = formexperiences.length;
        for (let i = 0; i < experiencelength; i++) {
            const experienceitem = formexperiences[i];
            let experience = { };
            const type = experienceitem.querySelector('#xptype').value;
            const organisation = experienceitem.querySelector('#xporganisation').value;
            const title = experienceitem.querySelector('#title').value;
            const year = experienceitem.querySelector('#xpyear').value;
            const duration = experienceitem.querySelector('#duration').value;
            let technologies = [];
            const formtechnologies = experienceitem.getElementsByClassName('detail1');
            const length = formtechnologies.length;
            for (let i = 0; i < length; i++) {
                const element = formtechnologies[i].value;
                if (element) {
                    technologies.push(element);
                }
            }
            experience.type = type;
            experience.organisation = organisation;
            experience.title = title;
            experience.technologies = technologies;
            experience.year = year;
            experience.duration = duration;     
            experiences.push(experience);
        }
        CV.experiences = experiences;

        
    } catch (error) {
        console.log(error);
    }

}
function getLanguages(CV) {
    let languages = [];
    const formlanguages = document.getElementsByClassName('language-content');
    const langlength =  formlanguages.length;
    for (let i = 0; i < langlength; i++) {
        const langugaeelement  = formlanguages[i];
        let languageitem = {};
        const language = langugaeelement.querySelector('#language').value;
        const level = langugaeelement.querySelector('#level').value;
        const certification = langugaeelement.querySelector('#certification').value;
        languageitem.language = language ;
        languageitem.level = level ;
        languageitem.certification = certification ;
        languageitem.experience = "";
        languages.push(languageitem);
    }
    CV.languages = languages ;
}

function getSoftSkills(CV) {
    let softSkills = [];
    const skills = document.getElementsByClassName('skillitem');
    const skillslength = skills.length;
    for (let i = 0; i < skillslength; i++) {
        softSkills.push(skills[i].value);        
    }
    CV.softSkills = softSkills;
}

function getInterests(CV) {
    let interests = [];
    const interestsitems = document.getElementsByClassName('interestitem');
    const interestslength = interestsitems.length;
    for (let i = 0; i < interestslength; i++) {
        interests.push(interestsitems[i].value);        
    }
    CV.interests = interests;
}