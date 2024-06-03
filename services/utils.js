let results  ;

	function filterGeneric() {
		let keyword1 = document.getElementById('name').value.toLowerCase();
		let keyword2 = document.getElementById('technology').value.toLowerCase();
		let keyword3 = document.getElementById('diploma').value.toLowerCase();
		let keyword4 = document.getElementById('address').value.toLowerCase();

		results = database.filter( item => {
			let namefilter = item.profile.firstName.toLowerCase().includes(keyword1) || 
				item.profile.lastName.toLowerCase().includes(keyword1) ;

			let technologyfilter = item.technologySkills.some(technology => {
				if (technology.skill.toLowerCase().includes(keyword2)) {
					return true;
				}
				return technology.details.some(detail => 
					detail.toLowerCase().includes(keyword2)
				);
			});

			let diplomafilter = item.education.some(diplomaelement => 
				diplomaelement.diploma.toLowerCase().includes(keyword3)
			);
			
			let addressfilter = item.profile.address.toLowerCase().includes(keyword4);

			return namefilter && technologyfilter && diplomafilter && addressfilter;
		});
		printResults(results);
		
	}
 function filterByName() {
	filterGeneric();
 }

 function filterByTechnology() {
	filterGeneric();
 }

 function filterByDiploma() {
	filterGeneric();
 }

 function filterByAddress() {
	filterGeneric();
 }

 function printResults(results) {
	let s= `
		<table class="data-grid">
			<tr><th>Profil</th><th>Nom</th><th>Prénom(s)</th><th>Adresse</th><th>CV</th></tr>
	` ;
	s = results.map(cvitem => `
		<tr>
			<td><img src="${cvitem.profile.photo}" class="user-profile" alt="Profile Picture"/></td>
			<td>${cvitem.profile.lastName.toUpperCase()}</td>
			<td>${cvitem.profile.firstName}</td>
			<td>${cvitem.profile.address}</td>
			<td><button onclick="getSingleCVPage(${cvitem.id})" class="opencv">Ouvrir</button></td>
		</tr>
	`)
	.reduce((pv, cv) => pv + cv, s );
	s += '</table>';
	document.getElementById('cvRepository').innerHTML = s ;
 }


 function getSingleCVPage(id) {
	window.location.href=`viewsinglecv.html?cvID=${id}` ;
 }

 function scrollUp() {
	let button = document.getElementById('goUp');
	button.addEventListener('click', function (event) {
		event.preventDefault();
		window.scrollTo({
			top:0,
			behavior:"smooth"
		})
	} )
 }

function desactivateAutoComplete() {
	const inputs = document.getElementsByTagName("input");
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].setAttribute('autocomplete', 'off');
	}
}

function duplicateEducationElement() {
	console.log('in duplication...');
	let diploma = document.getElementsByClassName('education-content')[0];
	let s =`
	<div class="education-content">
                <h3>Diplome</h3>
                <div>
                    <label for="diploma">Titre</label>
                    <input type="text" id="diploma" />
                </div>
                <div>
                    <label for="organisation">Organisation</label>
                    <input type="text" id="organisaton">
                </div>
                <div>
                    <label for="diplomayear">Année</label>
                    <input type="number" min="1900" max="2025" id="diplomayear">
                </div>
            </div>
	`;
	let tmpdiv = document.createElement('div');
	tmpdiv.innerHTML += s.trim() ;
	diploma.parentNode.insertBefore(tmpdiv.firstChild, diploma.nextSibling);
	console.log('after duplication...');
	
}
function duplicateExperienceElement() {
	console.log('in add experience')
	let experience = document.getElementsByClassName('technology-content')[0];
	let s= `
	<div>
                <h3>Technologie</h3>
                <div>
                    <div>
                        <label for="technology">Technologie</label>
                    <input type="text" id="technology" placeholder="Jakarta Entreprise Edition">
                    </div>
                     =====>
                    <div>
                        <label for="detail">Détail</label>
                    <input type="text" class="detail" placeholder="Architecture 3 tiers">
                    <input type="text" class="detail" placeholder="Modèle MVC2">
                    <input type="text" class="detail" placeholder="Servlets et JSP">
                    <input type="text" class="detail" placeholder="modèle DAO">
                    <input type="text" class="detail" placeholder="Spring/SpringBoot">
                    <input type="text" class="detail" placeholder="Apache TOMCAT">
                    </div>
                </div>                
            </div>
	`;
	let tmpdiv = document.createElement('div');
	tmpdiv.innerHTML += s.trim() ;
	experience.parentNode.insertBefore(tmpdiv.firstChild, experience.nextSibling);
}
function duplicateTechnologyElement() {
	console.log('in add technology')	
	let technology = document.getElementsByClassName('technology-content')[0];
	let s =`
	<div class="experience-content">
                <h3>Expérience</h3>
                <div>
                    <div>
                        <label for="xptype">Type</label>
                        <select name="xptype" id="xptype">
                            <option value="Stage">Stage</option>
                            <option value="Projet">Projet</option>
                        </select>
                    </div>
                    <div>
                        <label for="organisation">Organisation</label>
                        <input type="text" id="organisation">
                    </div>
                    <div>
                        <label for="title">Titre</label>
                        <input type="text" id="title">
                    </div>
                    <div>
                        <label for="xpyear">Année</label>
                        <input type="number" id="xpyear" min="1900" max="2024" >
                    </div>
                    <div>
                        <label for="duration">Durée</label>
                        <input type="text" id="duration">
                    </div>
                </div>
                <div class="technology-details">
                    <input type="text" id="detail1" placeholder="Veuillez saisir une technologie utilisée">
                    <input type="text" id="detail2" placeholder="Veuillez saisir une technologie utilisée">
                    <input type="text" id="detail3" placeholder="Veuillez saisir une technologie utilisée">
                    <input type="text" id="detail4" placeholder="Veuillez saisir une technologie utilisée">
                    <input type="text" id="detail5" placeholder="Veuillez saisir une technologie utilisée">
                    <input type="text" id="detail6" placeholder="Veuillez saisir une technologie utilisée">
                    <input type="text" id="detail7" placeholder="Veuillez saisir une technologie utilisée">
                </div>
               
            </div>
	`;
	let tmpdiv = document.createElement('div');
	tmpdiv.innerHTML += s.trim() ;
	technology.parentNode.insertBefore(tmpdiv.firstChild, technology.nextSibling);
}
function duplicateLanguageElement() {
	console.log('in add language')
	let language = document.getElementsByClassName('language-content');
	let s =`
	<div class="language-content">
                <h3>Langue</h3>
                <div>
                    <label for="language">Langue</label>
                    <input type="text" id="language" />
                </div>
                <div>
                    <label for="level">Niveau</label>
                    <select name="level" id="level">
                        <option value="A1">A1</option>
                        <option value="A2">A2</option>
                        <option value="B1">B1</option>
                        <option value="B2">B2</option>
                        <option value="C1">C1</option>
                        <option value="C2">C2</option>
                    </select>
                </div>
                <div>
                    <label for="certification">Certification</label>
                    <input type="text" id="certification">
                </div>
            </div>
	`;
	let tmpdiv = document.createElement('div');
	tmpdiv.innerHTML += s.trim() ;
	language.parentNode.insertBefore(tmpdiv.firstChild, language.nextSibling);
}
