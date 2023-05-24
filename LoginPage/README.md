


Défi Capture The Flag - Vérification de Mot de Passe
Bienvenue dans ce défi Capture The Flag (CTF) !

Aperçu du Défi
Ce défi implique une page de connexion simulée qui utilise JavaScript pour la vérification du mot de passe côté client. Votre objectif est de déchiffrer le code JavaScript pour découvrir le mot de passe correct et accéder au drapeau (flag).

Voici ce que vous devrez faire :

Inspectez le code JavaScript sur la page.
Remarquez comment il vérifie le mot de passe.
Comprenez comment le mot de passe est calculé et déchiffrez le processus pour déterminer le mot de passe correct.
Le mot de passe est une chaîne de 8 caractères. Pour chaque caractère, un calcul est effectué en ajoutant 0xBeef (48879 en décimal) à sa valeur ASCII. Le résultat du calcul pour chaque caractère est le suivant :


Premier caractère : 51999 
Deuxième caractère : 52046 
Troisième caractère : 52030 
Quatrième caractère : 52081
Cinquième caractère : 52081 
Sixième caractère : 52085 
Septième caractère : 52014 
Huitième caractère : 52080 
Neuvième caractère : 52034 


Pour retrouver les caractères originaux, vous devez soustraire 0xBeef des valeurs fournies et convertir les codes ASCII résultants en caractères.

!P@ssw0rD

Si le mot de passe est correctement entré, vous serez redirigé vers une page affichant le drapeau (flag).

Drapeau (Flag)
Une fois que vous avez réussi à déchiffrer le mot de passe et à le saisir correctement, vous serez redirigé vers une page contenant le drapeau (flag). Le drapeau suit ce format :

01253{VotreDrapeauIci}

L'objectif est de découvrir la partie 'VotreDrapeauIci'.

Avertissement
Ce défi simule un site web non sécurisé à des fins éducatives. Dans un scénario réel, les méthodes utilisées ici seraient considérées comme non sécurisées. Suivez toujours les meilleures pratiques de sécurité web dans une application de production.

Bonne chance !
