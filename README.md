# Gebruik van de Stepflow component

Plaats het volgende in de html

```
<app-stepflow>
  <app-stepflow-step>
    ...
  </app-stepflow-step>
</app-stepflow>
```

Tussen de app-stepflow-step component plaats je de vraag welke je getoond wilt hebben

## Titel voor de vraag
Titel voor de vraag kan met een selector `question` aangeduidt worden:
```
<p question>Een random vraag</p>
```
## Volgorde van vragen aangeven
Om aan te geven welke vraag het als eerst komt, moet de attribuut `[first]="true"` erbij toegevoegd worden aan de app-stepflow-step component
```
<app-stepflow-step [first]="true">
```
hetzelfde geld voor het laatste vraag
```
<app-stepflow-step [last]="true">
```
## Teksten van knoppen aanpassen
Wil je de teskt van een knop aanpassen, dan kan dat met `[tekstVolgende]` of `[tekstVorige]` attribute
```
<app-stepflow-step [tekstVolgende]="'Je kan het!'">

<app-stepflow-step [tekstVorige]="'Toch maar niet'">
```
## Knop naar volgende vraag vanuit code
Het is ook mogelijk om naar de volgende vraag te navigeren vanuit de code. Hiervoor zijn de volgende aanpassingen nodig:

- Plaats deze `[notifier]="stepNotifier"` in de hoofd stepflow (dus niet in de stepflow-step)
```
<app-stepflow [notifier]="stepNotifier">
```
- Nu kan je in de code met behulp van `stepNotifier: Subject<string> = new Subject<string>();` in je Class refereren naar de Stepflow component om daar een commando te geven
- Het commando die je moet geven is `this.stepNotifier.next('volgende');`. Deze zal je moeten gebruiken wanneer je vanuit de code naar het volgende stap wil gaan.

## Input controleren
Als je een input wilt controleren in de code na het klikken op Volgende, dan kan dat met behulp van het volgende:

- Plaats het directive `checkValue` op het input element: ```<input checkValue value=""> ```
- Dit maakt het mogelijk om de input waarde te achterhalen. Nu moet je nog `(sendValue)="checkInput($event)"` op de app-stepflow-step van waar het input element zit. Zoals hier:
```
  <app-stepflow-step (sendValue)="checkInput($event)">
    ....
    <input checkValue value="">
  </app-stepflow-step>
```
- hier is checkInput als voorbeeld functie gebruikt. Je kan zelf een eigen functie maken en daarvan het waarde aflezen in de code. En aan de hand daarvan zelf beslissen of je naar het volgende vraag wil leiden of niet.
- BELANGRIJK: zodra het directive op een input staat, zal er check op de Volgende knop uitgevoerd worden waarbij als er geen waarde is er ook niks zal gebeuren. Het is dus van belang dat je zelf vanuit de code met behulp van het output `(sendValue)` de waarde uitleest en de navigatie verder op gang zet.
