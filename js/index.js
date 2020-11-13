
// Competence array
// let competenceLogoClassFrontend = [
//     "fa-html5",
//     "fa-css3-alt",
//     "fa-sass",
//     "fa-bootstrap",
//     "fa-js",
//     "fa-vuejs",
// ]
// let competenceLogoClassBackend = [
//     "fa-node",
// ]
// let competenceLogoClassTools = [
//     "fa-npm",
//     "fa-git",
//     "fa-github"
// ]

// let competenceLogoClassColor = [
//     "html",
//     "css",
//     "sass",
//     "bootstrap",
//     "javascript",
//     "vuejs",
//     "nodejs",
//     "npm",
//     "git",
//     "github"
// ]
// let skillName = [
//     "HTML5",
//     "CSS3",
//     "Sass",
//     "Bootstrap",
//     "JavaScript",
//     "Vue.js",
//     "node.js",
//     "npm",
//     "git",
//     "Github"
// ]
// let competenceImage = [

// ]
// let arraySkill = []
// let levelSkills = []


// // Skills logo

// const langageCompetence = document.getElementById("langage-competence");
// langageCompetence.classList.add("card-group", "langage-competence");
// let divCard = document.createElement("div");
//     langageCompetence.appendChild(divCard);
//     divCard.classList.add("row", "row-cols-1", "row-cols-md-2","row-cols-lg-4" );

// for (let i = 0; i < competenceLogoClass.length; i++) {
//     let divCardCard = document.createElement("div");
//     divCard.appendChild(divCardCard);
//     divCardCard.classList.add("col-md-4", "col-lg-2");

//     let card = document.createElement("div");
//     divCardCard.appendChild(card);
//     card.classList.add("card", "m-1");

//     let cardBody = document.createElement("div");
//     card.appendChild(cardBody);
//     cardBody.classList.add("card-body", "text-center");

//     let logoCompetence = document.createElement("i");
//     cardBody.appendChild(logoCompetence);
//     logoCompetence.classList.add("fab", competenceLogoClass[i], "logo-langage", competenceLogoClassColor[i], "card-title"); 
//     arraySkill.push(logoCompetence);

//     let nameSkill = document.createElement("div");
//     cardBody.appendChild(nameSkill);
//     nameSkill.innerHTML = skillName[i]
//     nameSkill.classList.add("card-title","skill-name")

// }

// //Show Level
// console.log(arraySkill);
// for (let i = 0; i < arraySkill.length; i++) {
//     arraySkill[i].addEventListener('mouseover', function () {
//         console.log(arraySkill[i])
//         // langageCompetence.removeChild(arraySkill[i]);
//         let levelSkill = document.createElement('p');
//         // langageCompetence.appendChild(levelSkill);
//         langageCompetence.replaceChild(levelSkill, arraySkill[i])
//         levelSkill.innerHTML="coucou"
//         // supprimer le logo et ajouter un texte ou le level
//         levelSkills.push(levelSkill);
//     })
// }
// console.log(levelSkills)
// for (let i = 0; i < levelSkills.length; i++){
//     console.log('boucle')
//     levelSkills[i].addEventListener('mouseout', function () {
//         console.log('event')
//         // langageCompetence.appendChild(levelSkill);
//         for (let j = 0; j < arraySkill.length; j++){
//         langageCompetence.replaceChild(arraySkill[j],levelSkills[i])
//         }
//          // supprimer le logo et ajouter un texte ou le level
//     })
//     // })
// }
