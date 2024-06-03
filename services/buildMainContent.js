function buildMainContent(cv) {

    // retrieve data profile-description, education, technologySkills, experiences-projects, 
    const profiledescription = cv.profile.professionalSummary ;
    const education = cv.education;
    const technologySkills = cv.technologySkills;
    const experiencesprojects = cv.experiences ;

    //wrapper
    let maincontent = document.getElementsByClassName('main-content')[0];

    // profile description
    let divprofiledescription = document.createElement('div');
    divprofiledescription.setAttribute('class', 'main-profile');

    let profiledescriptionsectiontitle = document.createElement('span');
    profiledescriptionsectiontitle.setAttribute('class', 'section-title');
    profiledescriptionsectiontitle.textContent = 'Profil';

    let subprofiledescription = document.createElement('div');
    let description = document.createElement('span');
    description.setAttribute('id', 'profile-description');
    description.textContent = profiledescription ;
    subprofiledescription.appendChild(description);

    divprofiledescription.appendChild(profiledescriptionsectiontitle);
    divprofiledescription.appendChild(subprofiledescription);
    

    // education
    let diveducation = document.createElement('div');
    diveducation.setAttribute('class', 'education');

    let educationsectiontitle = document.createElement('span');
    educationsectiontitle.setAttribute('class', 'section-title');
    educationsectiontitle.textContent = 'Formation';
    diveducation.appendChild(educationsectiontitle);
        // each diploma
    for (let i = 0; i < education.length; i++) {
        const educationitem = education[i];
        let divdiploma = document.createElement('div');
        divdiploma.setAttribute('class', 'diploma');

        //diploma details
        let divdiplomadetails = document.createElement('div');
        divdiplomadetails.setAttribute('class', 'diploma-details');

        let diploma = document.createElement('span');
        diploma.textContent = educationitem.diploma;

        let tmporganisation  = ' ' + educationitem.organisation ;
        //console.log(tmporganisation);
        tmporganisation = tmporganisation.split('-');
        //console.log(tmporganisation);
        const tmplength = tmporganisation.length;

        let organisation = document.createElement('span');
        let location = document.createElement('span');
        if (tmplength == 2) {
            organisation.textContent = `${tmporganisation[0]}`;
            location.textContent = tmporganisation[1];
        }
        else if (tmplength == 3) {
            organisation.textContent = `${tmporganisation[0]} - ${tmporganisation[1]}`;
            location.textContent = tmporganisation[2];
        }

        // TODO location extract from organisation
        divdiplomadetails.appendChild(diploma);
        divdiplomadetails.appendChild(organisation);
        divdiplomadetails.appendChild(location);

        // diploma year
        let divdiplomayear = document.createElement('div');
        divdiplomayear.setAttribute('class', 'diploma-year');
        let year = document.createElement('span');
        year.textContent = educationitem.year ;
        divdiplomayear.appendChild(year);

        divdiploma.appendChild(divdiplomadetails);
        divdiploma.appendChild(divdiplomayear);
        diveducation.appendChild(divdiploma);

    }


    // technology skills
    let divtechnologyskills = document.createElement('div');
    divtechnologyskills.setAttribute('class', 'technology-skills');

    let technologyskillsectiontitle = document.createElement('span');
    technologyskillsectiontitle.setAttribute('class', 'section-title');
    technologyskillsectiontitle.textContent = 'Compétences';
    divtechnologyskills.appendChild(technologyskillsectiontitle);
    // each skill
    const technologySkillslength = technologySkills.length;
    for (let i = 0; i < technologySkillslength; i++) {
        const technologyitem = technologySkills[i];
        let divtechnologyskill = document.createElement('div');
        divtechnologyskill.setAttribute('class', 'technology-item');

        let skilldiv = document.createElement('div');
        let skill = document.createElement('span');
        skill.setAttribute('class', 'technology-skill');
        skill.textContent = technologyitem.skill ;
        skilldiv.appendChild(skill);

        let skilldetailsdiv = document.createElement('div');
        skilldetailsdiv.setAttribute('class', 'technology-details');
        let details = '' ;
            for (let i = 0; i < technologyitem.details.length; i++) {
                details += `${technologyitem.details[i]}, `;
            }
             details = details.substring(0, details.length-2);

        skilldetailsdiv.textContent = details ;

        divtechnologyskill.appendChild(skilldiv);
        divtechnologyskill.appendChild(skilldetailsdiv);
        
        divtechnologyskills.appendChild(divtechnologyskill);
    }   


    // experiences - projects
    let divexperiencesprojects = document.createElement('div');
    divexperiencesprojects.setAttribute('class', 'experiences-projects');

    let experiencesprojectsectiontitle = document.createElement('span');
    experiencesprojectsectiontitle.setAttribute('class', 'section-title');
    experiencesprojectsectiontitle.textContent = 'Expériences';
    divexperiencesprojects.appendChild(experiencesprojectsectiontitle);
    // each experience
    const experienceslength = experiencesprojects.length;
    for (let i = 0; i < experienceslength; i++) {
        const experienceitem = experiencesprojects[i];
        let divexperience = document.createElement('div');
        divexperience.setAttribute('class', 'project');


        // first div
        let divprojectyear = document.createElement('div');
        divprojectyear.setAttribute('class', 'project-year');

        let type = document.createElement('span');
        type.textContent = experienceitem.type;
        let year = document.createElement('span');
        year.textContent = experienceitem.year ;
        let organisation = document.createElement('span');
        organisation.textContent = experienceitem.organisation;
        let duration = document.createElement('span');
        duration.textContent = experienceitem.duration;

        divprojectyear.appendChild(type);
        divprojectyear.appendChild(year);
        divprojectyear.appendChild(organisation);
        divprojectyear.appendChild(duration);

        // second div
        let divprojectdetails = document.createElement('div');
        divprojectdetails.setAttribute('class', 'project-details');
        let title = document.createElement('span');
        title.textContent = 'Titre : ' + experienceitem.title ;
        let technologies = document.createElement('span');
        let details = 'Technologies : ' ;
                for (const element of experienceitem.technologies) {
                    details += `${element}, ` ;
                }
                details = details.substring(0, details.length-2);
        technologies.textContent = details;

        divprojectdetails.appendChild(title);
        divprojectdetails.appendChild(technologies);
        


        // wrap experience item
        divexperience.appendChild(divprojectyear);
        divexperience.appendChild(divprojectdetails);

        //push experience item into experiences div
        divexperiencesprojects.appendChild(divexperience);
    }
    
        

    // encapsulation
    maincontent.appendChild(divprofiledescription);
    maincontent.appendChild(diveducation);
    maincontent.appendChild(divtechnologyskills);
    maincontent.appendChild(divexperiencesprojects);
}

    


 
    

    
