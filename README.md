# Horaire d'ouverture d'un magasin

## Consignes

Vous êtes libre de choisir le langage de programmation de votre choix. Le rendu devra être fait sur un dépôt Github ou Gitlab en public afin que nous puissions consulter votre travail.

Vous devrez nous envoyer un courriel au maximum **deux jours** avant l'entretien en mettant les enseignants en copie.

## Fonctionnlités

Vous êtes contacté par la gérante d'une boutique, elle a besoin d'un programme tout simple qui réponde aux fonctionnalités suivantes:

* Les jours et heures d'ouverture doivent être configurables, elles sont définies par une liste de jours de la semaine suivie de l'heure d'ouverture et de fermeture. 

>Exemple: `Mon, Wed, Fri from 08:00 to 16:00`

* De plus, il peut y en avoir plusieurs. Les jours de la semaine sont exprimés par leur abréviation en anglais, ils ne sont pas forcément ordonnés. 

* La gérante a besoin d'afficher le jour et l'heure de la prochaine ouverture du magasin sur un affichage dans la vitrine. De plus, elle a aussi besoin d'indiquer sur son site web si la boutique est ouverte ou non au moment présent. 

* Pour ceci, implémentez un module avec les fonctions suivantes:

  * IsOpenOn(date)
  * NextOpeningDate(date)

## Contraintes

* Vous avez le choix du langage de programmation.
* Vous pouvez utiliser toutes les librairies standards de ce langage ainsi que d'autres librairies généralistes mais, pas d'hypothétiques librairies gérant ce genre de problème.

La durée de ce travail est estimée à environ 4 heures. Evitez de passer trop de temps, vous pouvez soumettre une solution partielle. Vous présenterez votre code lors d'un entretien, vous aurez la possibilité d'en expliquer sa structure et son fonctionnement ainsi que les idées ou les pistes dans le cas où il n'est pas complet.

## Validations

Soit les heures d'ouverture suivantes:

```txt
"Mon, Wed, Fri" "08:00 - 16:00"
"Tue, Thu, Sat" "08:00 - 12:00"
"Tue, Thu" "14:00 - 18:00"
```

Ainsi que les dates suivantes:

```txt
wednesday = '2024-02-21T07:45:00.000'
thursday = '2024-02-22T12:22:11.824'
saturday = '2024-02-24T09:15:00.000'
sunday = '2024-02-25T09:15:00.000'
friday_morning = '2024-02-23T08:00:00.000'
monday_morning = '2024-02-26T08:00:00.000'
thursday_afternoon = '2024-02-22T14:00:00.000'
```

Alors les assertions suivantes doivent être vérifiées:

```txt
IsOpenOn(wednesday) == false
IsOpenOn(thursday) == false
IsOpenOn(sunday) == false
NextOpeningDate(thursday_afternoon) == friday_morning
NextOpeningDate(saturday) == monday_morning
NextOpeningDate(thursday) == thursday_afternoon
```

## Extension

Si vous avez terminé et que vous souhaitez aller plus loin, vous pouvez ajouter la fonctionnalité suivante tout en impactant le **moins possible** la version initiale.

### Gestion des heures d'ouverture variables

La gérante aimerait pouvoir redéfinir les heures d'ouverture de son magasin. Implémentez une fonction qui permet de modifier les heures d'ouverture en fonction du jour de la semaine.

Implémentez une fonction `SetOpeningHours(day, startTime, endTime)` qui prend en paramètre un jour de la semaine et une plage horaire. Si la plage horaire est **vide**, cela signifie que le magasin est fermé ce jour-là.
> Exemple: `SetOpeningHours("Thu", "", "")`

### Validation

Soit les heures d'ouverture de base suivantes:

```txt
"Mon, Wed, Fri" "08:00 - 16:00"
"Tue, Thu, Sat" "08:00 - 12:00"
"Tue, Thu" "14:00 - 18:00"
```

Les opérations suivantes sont effectuées:

```txt
SetOpeningHours("Mon", "", "")
SetOpeningHours("Wed", "07:30", "15:45")
SetOpeningHours("Sat", "07:30", "20:00")
SetOpeningHours("Sun", "09:00", "13:00")
```

Ainsi que les dates suivantes:

```txt
monday = '2024-02-26T10:20:00.000'
wednesday = '2024-02-21T07:45:00.000'
saturday = '2024-02-24T19:50:00.000'
sunday = '2024-02-25T09:15:00.000'
```

Alors les assertions suivantes doivent être vérifiées:

```txt
IsOpenOn(monday) == false
IsOpenOn(wednesday) == true
IsOpenOn(saturday) == true
IsOpenOn(sunday) == true
```
