/*Szabóné Virág Kinga Junior Frontend Team12*/

/*1. feladat: hosszEllenor() – Bemeneti paraméterek száma: 1 (szöveg)
Készítsen egy függvényt, amely ellenőrzi egy bemeneti karakterlánc hosszát, és amennyiben az 
nem megfelelő (nincs legalább 8 karakter) úgy a függvény hamis értékkel tér vissza, ellenkező 
esetben az függvény visszatérési értéke természetesen igaz lesz.
Kipróbálásra: „teszt” esetleg „feladatteszt”
Visszatérési érték: false illetve true*/

function hosszEllenor(szoveg) {
    if (szoveg.length < 8) {
        return false
    } else {
        return true
    }
}

document.write(hosszEllenor("teszt") + ",")
document.write(hosszEllenor("feladatteszt"))



/*2. feladat: tajSzamEllenor () – Bemeneti paraméterek száma: 1 (számsor szövegként)
Készítsen egy függvényt mely szöveges bemeneti paraméterrel dolgozik, mely számok 
sorozata, összesen 9 karakter hosszú.
Ellenőrzés folyamata:
Ellenőrizni kell a karakter mennyiségét
(a)Majd összeadni a páros helyen lévő elemeket(4db), ezt megszorozni héttel
(b)Ezután összeadni a páratlan helyen lévő elemeket(4db), ezt megszorozni hárommal
Megjegyzés: a számsor utolsó elemét csak a következő lépésnél használjuk fel.
A feltétel igaz, ha a páros és páratlan számok véreredménye 10-zel való maradékos osztás után 
a tajszám utolsó elemének értékét adja vissza! Azaz: (a+b)%10==tajszam[8]
Ellenkező esetben nem
Kipróbálásra: tajSzamEllenor(040655330) esetleg tajSzamEllenor(111111111)
Visszatérési érték: true illetve false
További igaz visszatérésű elemek: 037687210, 019536646*/

function tajSzamEllenor(tajSzam) {
    if (tajSzam.length != 9) {
        return false
    }
    let parosSzam = 0;
    let paratlanSzam = 0;
    for (let i = 0; i < 8; i++) {


        if (i % 2 == 0) {
            parosSzam += tajSzam[i];
        } else {
            paratlanSzam += tajSzam[i];
        }
    }
    parosSzam *= 7;
    paratlanSzam *= 3;
    if ((parosSzam + paratlanSzam) % 10 == tajSzam[8]) {
        return true
    } else {
        return false
    }
}

document.write(tajSzamEllenor("040655330"))
document.write(tajSzamEllenor("111111111"))


/*3. feladat: tombTerjedelem() – Bemeneti paraméterek száma: 1(tömb)
Határozza meg egy vagy több függvény segítségével, egy adott tömb elemeinek terjedelmét.
    Terjedelem: a tömb legkisebb és a legnagyobb eleme közötti különbség.
A függvényt úgy készítse el, hogy bármilyen tömb paraméter esetén helyes megoldás adjon.
    Kipróbálásra:
let vizsgaltTomb = [3, 5, 10, 16, 9];
tombTerjedelem(vizsgaltTomb);
Visszatérési érték: 13*/

function tombTerjedelem(tomb) {
    let minimum = tomb[0];
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] < minimum) {
            minimum = tomb[i]
        }
    }
    let maximum = tomb[0];
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] > maximum) {
            maximum = tomb[i]
        }
    }
    return maximum - minimum
}

let vizsgaltTomb = [3, 5, 10, 16, 9];
document.write(tombTerjedelem(vizsgaltTomb));

/*4.feladat: legidosebbDolgozo() – Bemeneti paraméterek száma: 1(objektum)
Készíts el egy függvényt, amelynek megadsz egy objektumot, melyben biztosan tartozik egy
[kor] tulajdonság minden elemhez, abból kikeresse a „legidősebb” elemet, és visszaadja az 
objektumban található elemnek az indexét.
A függvényt úgy készítse el, hogy bármilyen[kor] attribútummal rendelkező paraméter esetén 
helyes megoldás adjon.
    Kipróbálásra: A feladathoz mellékelt objektum
Visszatérési érték: A legidősebb objektum elem indexe(jelenleg: 3)*/


const Dolgozok = [{
    nev: "Koaxk Ábel",
    kor: 23,
    fizetes: 400000,
    beosztas: "Rendszergazda"
},
{
    nev: "Zsíros B. Ödön",
    kor: 45,
    fizetes: 1200000,
    beosztas: "Ügyvezető Igazgató"
},
{
    nev: "Meg Győző",
    kor: 32,
    fizetes: 600000,
    beosztas: "Marketing Manager"
},
{
    nev: "Békés Csaba",
    kor: 63,
    fizetes: 180000,
    beosztas: "Takarító"
},
{
    nev: "Pofá Zoltán",
    kor: 25,
    fizetes: 300000,
    beosztas: "Biztonsági Őr"
},
{
    nev: "Fejet Lenke",
    kor: 22,
    fizetes: 220000,
    beosztas: "Irodai Titkár"
},
{
    nev: "Vak Cina",
    kor: 30,
    fizetes: 500000,
    beosztas: "Üzem Orvos"
}
]


function legidosebbDolgozo(dolgozok) {
    let maxKor = dolgozok[0].kor;
    let maxIndex = 0;
    for (let i = 0; i < dolgozok.length; i++) {
        if (dolgozok[i].kor > maxKor) {
            maxKor = dolgozok[i].kor
            maxIndex = i
        }
    }
    return maxIndex
}

document.write(legidosebbDolgozo(Dolgozok))

/*5.feladat: fizetesEmeles() – Bemeneti paraméterek száma: 1(objektum)
Készíts egy függvényt, mely paraméterként bekér egy objektumot, melyben biztosan tartozik
egy[fizetes] tulajdonság minden elemhez, melyben meghatározza mennyi az átlagfizetés.
Majd az átlag fizetés alatti emberek fizetését emeli 10 % -kal.Ezekután visszaadja a módosított 
objektumot a programnak.
A függvényt úgy készítse el, hogy bármilyen[fizetes] attribútummal rendelkező paraméter 
esetén helyes megoldás adjon.
Kipróbálásra: A feladathoz mellékelt objektum
Visszatérési érték: A módosított objektum*/

function fizetesEmeles(dolgozok) {
    let osszeg = 0;
    for (let i = 0; i < dolgozok.length; i++) {
        osszeg += dolgozok[i].fizetes;
    }

    let atlag = osszeg / dolgozok.length;
    for (let i = 0; i < dolgozok.length; i++) {
        if (dolgozok[i].fizetes < atlag) {
            dolgozok[i].fizetes *= 1.1
        }
    }
    return dolgozok
}
