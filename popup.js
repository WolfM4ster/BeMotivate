$(document).ready(function() {
	var text = "Stop lose your time ! Work !!!";
	var regular = /youtube|dofus|stream|face|twit|news|gag|rutu|dailymo|fight/;
						
	var listeUrlGood = ["http://blog.paumard.org/cours/java/", "https://openclassrooms.com/", "http://perso.telecom-paristech.fr/~hudry/coursJava/exercices/index.html", 
						"http://www.developpez.com/", "https://openclassrooms.com/", "http://www.w3schools.com/", "http://www.bases-hacking.org/",
						"http://www.bestcours.com/", "http://sql.sh/", "http://www.jmdoudoux.fr/accueil.html", "https://www.enigmagroup.org/", ""];
						
	var random = listeUrlGood[Math.floor(Math.random()*listeUrlGood.length)];
    
	if(regular.test(window.location.href)){
		alert(text);
		window.location.href = random;
	}
});