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
	/*
	let keyword = document.getElementById('name').value.toLowerCase();
	results = database.filter( item => {
		return item.profile.firstName.toLowerCase().includes(keyword) || item.profile.lastName.toLowerCase().includes(keyword) ;
 	});
    printResults(results);
	*/
 }

 function filterByTechnology() {
	filterGeneric();
	/*
	let keyword = document.getElementById('technology').value.toLowerCase();
	results.filter(item => {
        const technologies = item.technologySkills;
        return technologies.some(technology => {
            if (technology.skill.toLowerCase().includes(keyword)) {
                return true;
            }
            return technology.details.some(detail => 
                detail.toLowerCase().includes(keyword)
            );
        });
    });
	printResults(results);
   */
 }

 function filterByDiploma() {
	filterGeneric();
	/*
	let keyword = document.getElementById('diploma').value.toLowerCase();
	results = database.filter( item => {
		const diplomas = item.education;
        return diplomas.some(diplomaelement => 
        	diplomaelement.diploma.toLowerCase().includes(keyword)
        );
	});
	printResults(results);
    */
 }

 function filterByAddress() {
	filterGeneric();
	/*
	let keyword = document.getElementById('address').value.toLowerCase();
	results = database.filter( item => {
		return item.profile.address.toLowerCase().includes(keyword);
	});
	printResults(results);
    */
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

 
