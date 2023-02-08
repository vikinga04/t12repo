/*1. keszito() – Bemeneti paraméterek száma: 0
Készíts egy függvényt mely kiírja az adott file készítőjének 
• Nevét
• Csoportjának típusát (Junior Frontend vagy Webfejlesztő) 
• Csoportjának azonosítóját (melyik #Team tagja)
Visszatérési érték: nincs-*/

function keszito() {
    writeLineToDocument("Szabóné Virág Kinga")
    writeLineToDocument("Junior Frontend")
    writeLineToDocument("Team 12")
}

function writeLineToDocument(value) {
    document.write(value + "<br/>")
}

keszito()

function hatvanyozo(szam, hatvany) {
    return Math.pow(szam, hatvany)
}

writeLineToDocument(hatvanyozo(2, 3))

function parosLetrehoz(alsoHatar, felsoHatar) {
    for (let i = alsoHatar; i < felsoHatar; i++) {
        if (i % 2 == 0) {
            return i
        }
    }
}

writeLineToDocument(parosLetrehoz(1, 100))

function testTomegIndex(suly, magassag) {
    let tti = suly / (magassag * magassag)

    if (tti >= 40) {
        return "IIIfokuSulyosElhizas"
    } else if (tti >= 35) {
        return "IIfokuElhizas"
    } else if (tti >= 30) {
        return "IfokuElhizas"
    } else if (tti >= 25) {
        return "tulsulyos"
    } else if (tti >= 18.5) {
        return "normalisTestsuly"
    } else if (tti >= 17) {
        return "enyheSovanysag"
    } else if (tti >= 16) {
        return "mersekeltSovanysag"
    } else {
        return "sulyosSovanysag"
    }
}

writeLineToDocument(testTomegIndex(200, 2))
writeLineToDocument(testTomegIndex(45, 1.5))
writeLineToDocument(testTomegIndex(25, 1.2))

function egeszOsztoE(szam, oszto) {
    return szam % oszto == 0
}

writeLineToDocument(egeszOsztoE(25, 5))
writeLineToDocument(egeszOsztoE(1050, 7))
writeLineToDocument(egeszOsztoE(2048, 3))

