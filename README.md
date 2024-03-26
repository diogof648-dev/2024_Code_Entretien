# Horaire d'ouverture d'un magasin

## Consignes

Vous êtes libre de choisir le langage de programmation de votre choix. Le rendu devra être fait sur un repot github ou gitlab en public afin que nous puissons consulter votre travail.

Vous devrez nous envoyer un couriel au maximum **deux jours** avant l'entretien en mettant les ensignants en copie. 


## Fonctionnlités

Vous êtes contacté par la gérante d'une boutique, elle a besoin d'un programme tout simple qui réponde aux fonctionnalités suivantes:

Les jours et heures d'ouverture doivent être configurable, elles sont définies par une liste de jours de la semaine suivie d'un couple heure d'ouverture et heure de fermeture. 

Exemple: "Mon, Wed, Fri from 08:00 to 16h00". 

De plus il peut y en avoir plusieurs. Les jours de la semaines sont exprimés par leur abréviation en anglais, ils ne sont pas forcément consécutifs. 

La gérante a besoin d'afficher le jour et l'heure de la prochaine ouverture du magasin sur un affichage dans la vitrine. De plus elle a aussi besoin d'indiquer sur son site web si la boutique est ouverte ou non au moment présent. 

Pour ceci, implémentez un module avec les fonctions suivantes:

* IsOpenOn(date)
* NextOpeningDate(date)

## Contraintes

Vous avez le choix du langage de programmation. Vous pouvez utilisez toutes les librairies standards de ce langage ainsi que d'autres librairies généralistes mais pas d'hypothétiques librairies gérant ce genre de problèmes.

La durée de ce travail est estimée à environ 4 heures. Evitez de passer trop de temps, vous pouvez soumettre une solution partielle. Vous présenterez votre code lors d'un entretien, vous aurez la possibilité d'en expliquer sa structure et son fonctionnement ainsi que les idées ou les pistes dans le cas où il n'est pas complet.

## Validations

Soit les heures d'ouverture suivantes:

* "Mon, Wed, Fri" "08:00 - 16:00"
* "Tue, Thu, Sat" "08:00 - 12:00"
* "Tue, Thu" "14:00 - 18:00"

Ainsi que les dates suivantes:

* wednesday = '2016-05-11T12:22:11.824'
* thursday = '2016-05-12T12:22:11.824'
* saturday = '2016-05-14T09:15:00.000'
* sunday = '2016-05-15T09:15:00.000'
* friday_morning = '2016-05-13T08:00:00.000'
* monday_morning = '2016-05-16T08:00:00.000'
* thursday_afternoon = '2016-05-12T14:00:00.000'

Alors les assertions suivantes doivent être vérifiées:

```
IsOpenOn(wednesday) == true
IsOpenOn(thursday) == false
IsOpenOn(sunday) == false
NextOpeningDate(thursday_afternoon) == friday_morning
NextOpeningDate(saturday) == monday_morning
NextOpeningDate(thursday) == thursday_afternoon
```
