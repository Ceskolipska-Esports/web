# Palubní deník

Toto je soubor, do kterého budu psát věci jako odůvodnění mých rozhodnutí při vývoji
tohoto projektu. Jednotlivé zápisy budou vždy označeny datem, ale to bude čtenáři zřejmé,
až si kousek dokumentu přečte. Tyto informace jsou určené hlavně pro budoucí generace
vedení Českolipská Esports, ale i jiným lidem by mohly přijít zajímavé. Ať už jsi
kdokoliv, vítej na palubě! :D

## 16. 11. 2024

Dneškem zahajuji tento projekt. Už jednu stránku máme, ale ta je upřímně trošku odfláklá,
takže si myslím, že ji dokážu zlepšit. Už jsem vytvořil novou domovskou stránku, ale
minimálně mi ještě zbývá zkonstruovat sekci, ve které bude moct zobrazovat turnaje. Také
chci udělat nějakou integraci s Twitchem v podobě indikátoru živého vysílání na našem
kanále. Napadlo mě i to, že by v budoucnosti bylo možné se přes tuto stránku i přihlašovat
na turnaje pomocí Discord účtu. Jak by to fungovalo ještě nemám promyšlené, ale už jsem se
o něco pokusil na předchozí verzi stránky ve SvelteKitu, což nevyšlo zejména protože se mi
do toho nechtělo.

### 20:39

Pracuji na integraci s Twitchem. Můj nápad je takový, že vedle tlačítka odkazujícího na
náš Twitch kanál by se v době vysílání objevil indikátor informující uživatele o aktuálním
stavu kanálu. Narazil jsem ale na překážku - doteď jsem používal `bun` jako správce
balíčků. Jako zodpovědný člověk jsem na funkce napsal testy, které ověřují jejich správné
fungování. Když jsem testy spustil pomocí `bun test` tak vše fungovalo tak, jak mělo, ale
když jsem spustil testy pomocí `pnpm test`, testy přestaly fungovat, jelikož `bun`
automaticky čte `.env`, zatímco `pnpm` ne. Toto chování se mi nelíbí, tudíž jsem zvolil
cestu přejít "zpátky" k `pnpm`. Je to trochu abstraktní důvod, ale není to zas takový
rozdíl. Jediné co se změnilo je to, že místo nativního test runneru teď používáme
`vitest`, který má stejně lepší integraci s Nuxtem.

## 17. 11. 2024

### 15:21

Integraci s Twitchem jsem dokončil včera večer, jen jsem už neměl sílu na to napsat zápis
sem do deníku. Dalším krokem je vytvořit tedy systém pro správu turnajů. Jedna z věcí,
které mě hned teď napadly, je živá tabulka výsledků. Pravděpodobně to bude komplikované,
ale jsem odhodlaný se tím zabývat.
