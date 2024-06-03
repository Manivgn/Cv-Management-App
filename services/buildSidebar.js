function buildSidebar(cv) {
    // retrieve data languages, soft-skills, interests, other activities
    const profiledescription = cv.profile.professionalSummary;
    const profilelanguages = cv.languages ;
    const profilesoftskills = cv.softSkills;
    const profileinterests = cv.interests;
    const cvsectiontitles = Object.keys(cv);


    // wrapper
    let sidebar = document.getElementsByClassName('sidebar')[0];
    
    
    //languages
    let divlanguages = document.createElement('div');
    divlanguages.setAttribute('class', 'languages');

    let languagessectiontitle = document.createElement('span');
    languagessectiontitle.setAttribute('class', 'section-title');
    languagessectiontitle.textContent = 'Langues';
    divlanguages.appendChild(languagessectiontitle);

    let sublanguages = document.createElement('div');
    for (let i = 0; i < profilelanguages.length; i++) {
        let language = document.createElement('span');
        language.setAttribute('class', 'language-item');
        language.textContent = profilelanguages[i].language;
        sublanguages.appendChild(language);
    }
    divlanguages.appendChild(sublanguages);
    


    //soft-skills
    let divsoftskills = document.createElement('div');
    divsoftskills.setAttribute('class', 'soft-skills');

    let softskillssectiontitle = document.createElement('span');
    softskillssectiontitle.setAttribute('class', 'section-title');
    softskillssectiontitle.textContent = 'Qualités';
    divsoftskills.appendChild(softskillssectiontitle);

    let subsoftskills = document.createElement('div');
    for (let i = 0; i < profilesoftskills.length; i++) {
        let softskill = document.createElement('span');
        softskill.setAttribute('class', 'skill-item');
        softskill.textContent = profilesoftskills[i];
        subsoftskills.appendChild(softskill);
    }
    divsoftskills.appendChild(subsoftskills);


    //interests
    let divinterests = document.createElement('div');
    divinterests.setAttribute('class', 'interests');

    let interestssectiontitle = document.createElement('span');
    interestssectiontitle.setAttribute('class', 'section-title');
    interestssectiontitle.textContent = `Centres d'intérêt`;
    divinterests.appendChild(interestssectiontitle);

    let subinterests = document.createElement('div');
    for (let i = 0; i < profileinterests.length; i++) {
        let interest = document.createElement('span');
        interest.setAttribute('class', 'interest-item');
        interest.textContent = profileinterests[i];
        subinterests.appendChild(interest);
    }
    divinterests.appendChild(subinterests);



    // encapsulation
    sidebar.appendChild(divlanguages);
    sidebar.appendChild(divsoftskills);
    sidebar.appendChild(divinterests);
    
   

}