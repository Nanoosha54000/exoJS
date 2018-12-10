let listeFilms = [
  {
    titre: "Flash",
    annee: 2018,
    realisateur : "Bebert"
  },
  {
    titre: "Thor",
    annee: 2015,
    realisateur : "Morice"
  },
  {
    titre: "Les gendarmes",
    annee: 1985,
    realisateur : "Albert"
  },
  {
    titre: "Bidasse",
    annee: 1996,
    realisateur : "Robert"
  }

];

//Je cr�e une variable pour travailler sur la balise tbody
var tbodyElt = document.querySelector('tbody');

//J'ai aussi besoin de bosser sur ma div
var divInfo = document.getElementById('infoAjout');

//Je cr�e une boucle (4 �l�ments pr�d�finis)
for (var i = 0; i < listeFilms.length; i++) {

    //Je cr�e 4 variables: 3 td + 1 tr
    var trElt = document.createElement('tr');
    var tdEltTitre = document.createElement('td');
    var tdEltAnnee = document.createElement('td');
    var tdEltReal = document.createElement('td');

    //Je donne le texte qui correspond aux 3 td
    tdEltTitre.textContent = listeFilms[i].titre;
    tdEltAnnee.textContent = listeFilms[i].annee;
    tdEltReal.textContent = listeFilms[i].realisateur;

    //J'indique que mes 3 tr sont des enfants de mon td
    trElt.appendChild(tdEltTitre);
    trElt.appendChild(tdEltAnnee);
    trElt.appendChild(tdEltReal);

    //J'indique que mon td est l'enfant de tbody(d�j� selectionn� hors boucle)
    //Cette selection hors boucle ne me semble pas n�cessaire jusqu'� maintenant...
    tbodyElt.appendChild(trElt);
}

//Je vais travailler sur la div Ajout
var divAjout = document.getElementById('ajout');

    //Je cr�e un bouton
var btnAjouter = document.createElement('button');
    //Je lui donne un nom
btnAjouter.textContent = 'Ajouter';
    //Bootstrap : pour faire joli
btnAjouter.classList.add('btn-primary');

//cr�er un �venement quand on clique dessus
btnAjouter.addEventListener('click', function () {
    //je cr�e un formulaire qui va contenir 3 inputs et un bouton

    var formElt = document.createElement('form');

    var txtTitreElt = document.createElement('input');
    txtTitreElt.placeholder = 'Titre';
    txtTitreElt.required = 'true'; //required me semble judicieux

    var txtAnneeElt = document.createElement('input');
    txtAnneeElt.placeholder = 'Ann\u00e9e';//le "�" apparait sous forme de "?" A creuser
                                            // \u00e9 en javascript === �
    txtAnneeElt.required = 'true';

    var txtRealElt = document.createElement('input');
    txtRealElt.placeholder = 'R\u00e9alisateur';//le "�" apparait sous forme de "?"
    txtRealElt.required = 'true';

    var btnEnvoyerElt = document.createElement('input');
    //Attention, c'est un bouton ! Par d�faut, il est consid�r� comme un texte (input)
    btnEnvoyerElt.type = 'submit';
    btnEnvoyerElt.value = 'Envoyer';
    btnEnvoyerElt.classList.add('btn-secondary'); //Bootstrap

    formElt.addEventListener('submit', function (e) { //attention � la syntaxe !

        //pour r�cup�rer les donn�es
        var titre = txtTitreElt.value;
        var annee = txtAnneeElt.value;
        var real = txtRealElt.value;

        //REGEX pour l'ann�e ! que l'on peut peaufiner
        var regex = /[0-9]{4}$/;

        
        if (regex.test(annee)) {
            // PUSH A REVOIR !!!
            listeFilms.push({ titre, annee, realisateur});

            divInfo.textContent = "FILM correctement ajout\u00e9";

            divAjout.replaceChild(btnAjouter, formElt);

        }

        else {
            divInfo.textContent = "INCORRECT : Il faut 4 chiffres";
            
        }

        //je veux que la bulle info s'arr�te au bout de 3 secondes
        setTimeout (function () {
                    divInfo.textContent = "";
                    }, 3000);
        //�a ne marche pas !!!!!!!!
                     

     e.preventDefault(); //Pour �viter la perte des donn�s entrantes, je crois...
    });

    // faire les affectations enfants/parents A LA FIN !!!
    //mettre les inputs chez leur papa (formulaire)
    formElt.appendChild(txtTitreElt);
    formElt.appendChild(txtAnneeElt);
    formElt.appendChild(txtRealElt);
    formElt.appendChild(btnEnvoyerElt);

    //Merci Cyril....replaceChild...1er:j'indique ,2�me: je le vire !
    //Au lieu de divAjout.innerHTML=""; ET divAjout.appendChild(formElt) qui marche bien aussi
    divAjout.replaceChild(formElt, btnAjouter);//+rapide
    
 })


divAjout.appendChild(btnAjouter);