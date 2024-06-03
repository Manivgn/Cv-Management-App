function buildHeader(cv) {


    // retrieve data
    const profile = cv.profile ;

    const cvtitle = `Curriculum vitae ${profile.lastName} ${profile.firstName}`  ;
    const cvprofilepicture = profile.photo;
    const profilename = `${profile.lastName} ${profile.firstName}` ;
    const birthday = profile.birthday ;
    const profiletitle = `Futur lauréat Ingénierie logicielle`;
    const profilemail = profile.email ;
    const profilephonenumber = profile.phone ;
    const profilelinks = profile.links ;
    const profilelocation =  profile.address ;

    document.title = cvtitle ;

    // main wrapper
    let headerprofile = document.getElementsByClassName('header-profile')[0];
    //let headersectiontitle = document.createElement('span');
    //headersectiontitle.setAttribute('class', 'section-title');
    //headerprofile.appendChild(headersectiontitle);
    
    // Profilepicture
    let divpicture = document.createElement('div');
    divpicture.setAttribute('class', 'picture')
    let image = document.createElement('img');
    image.setAttribute('id', 'profilepicture');
    image.setAttribute('src', cvprofilepicture);
    image.setAttribute('alt','Profile picture');
    divpicture.appendChild(image);
    headerprofile.appendChild(divpicture);


    // Profile details
    let divdetails = document.createElement('div');
    divdetails.setAttribute('class', 'details');

    const name = document.createElement('span');
    name.setAttribute('id', 'profile-name');
    name.textContent = profilename ;
   
    const title = document.createElement('span');
    title.setAttribute('id', 'profile-title');
    title.textContent = profiletitle ;
    
    const mail = document.createElement('span');
    mail.setAttribute('id', 'profile-mail');
    mail.textContent = 'Courriel : ' + profilemail ;

    const phonenumber = document.createElement('span');
    phonenumber.setAttribute('id', 'profile-phonenumber');
    phonenumber.textContent = 'Tél : ' + profilephonenumber ;

    const linkedin = document.createElement('span');
    linkedin.setAttribute('id', 'profile-linkedin');
    linkedin.textContent = 'Liens : ' + profilelinks[0];

    const location = document.createElement('span');
    location.setAttribute('id', 'profile-location');
    location.textContent = 'Adresse : ' + profilelocation ;

    let divdetailscontactlocation = document.createElement('div');
    divdetailscontactlocation.setAttribute('class', 'details-contact-location');
    divdetailscontactlocation.appendChild(mail);
    divdetailscontactlocation.appendChild(phonenumber);
    divdetailscontactlocation.appendChild(linkedin);
    divdetailscontactlocation.appendChild(location);

    divdetails.appendChild(name);
    divdetails.appendChild(title);
    divdetails.appendChild(divdetailscontactlocation);


    // encapsulation
    headerprofile.appendChild(divpicture);
    headerprofile.appendChild(divdetails);
    

}
