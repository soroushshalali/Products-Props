let mainArray = [
    {
        frage: "Sind Sie älter als 40?",
        antworten: ["Ja", "Nein"]
    },
    {
        frage: "Arbeiten Sie im medizinischen Bereich oder in einer gemeinschaftseinrichtung? ",
        antworten: ["Ja", "Nein"]
    },
    {
        frage: "Waren Sie in den letzten 14 Tagen NRW , Hamburg oder Baden-Würtenberg? ",
        antworten: ["Ja", "Nein"]
    },
    {
        frage: "Hatten Sie in den letzten 24 Stunden Fieber (über 38.2°C)?",
        antworten: ["Ja", "Nein"]
    },
    {
        frage: "Leiden Sie an Schüttelfrost?",
        antworten: ["Ja", "Nein"]
    },
    {
        frage: "Haben Sie anhaltenden Husten?",
        antworten: ["Ja", "Nein"]
    },
    {
        frage: "Haben Sie Schnupfen?",
        antworten: ["Ja", "Nein"]
    },
    {
        frage: "Haben Sie Halsschmerzen?",
        antworten: ["Ja", "Nein"]
    },
    {
        frage: "Fühlen Sie sich schlapper als sonst oder sind abgeschlagen?",
        antworten: ["Ja", "Nein"]
    },
    {
        frage: "Haben Sie Kopfschmerzen?",
        antworten: ["Ja", "Nein"]
    },
    {
        frage: "Haben Sie Atemnot?",
        antworten: ["Ja", "Nein"]
    },
    {
        frage: "Haben Sie eine erhöhte Herzfrequenz?",
        antworten: ["Ja", "Nein"]
    },
    {
        frage: "Leiden Sie an Gliederschmerzen?",
        antworten: ["Ja", "Nein"]
    },
    {
        frage: "Haben Sie Durchfall?",
        antworten: ["Ja", "Nein"]
    },
    {
        frage: "Leiden Sie an einer chronischen Lungenvorerkrankung?",
        antworten: ["Ja", "Nein"]
    },
    {
        frage: "Haben Sie Diabetes?",
        antworten: ["Ja", "Nein"]
    },
    {
        frage: "Haben Sie Herzerkrankungen?",
        antworten: ["Ja", "Nein"]
    },
    {
        frage: "Sind Sie schwanger?",
        antworten: ["Ja", "Nein"]
    },
    {
        frage: "Sind Sie schwanger?",
        antworten: ["Ja", "Nein"]
    },
]
let ergebnisArray = [
    `
    <h1>Bleiben Sie zuhause</h1>
    <p>Bleiben Sie zuhause.
Sie hatten in letzter Zeit weder Kontakt zu einer infizierten Person, noch waren Sie in einem Risikogebiet (laut Einstufung des Robert Koch Instituts). Ihre beschriebene Symptomatik können Sie aktuell zu Hause auskurieren oder weist nicht auf eine Infektion hin: Das sind sehr gute Nachrichten! Dennoch gibt es einige sehr wichtige Maßnahmen, die Sie auch zu Hause weiterhin einhalten müssen. Dazu gehört unter anderem eine sorgfältige Händehygiene. Informationen dazu finden Sie hier.

Wenn Sie Ihr Haus dennoch verlassen, achten Sie auf ausreichend Abstand (> 2m) zu Ihren Mitmenschen. Fassen Sie nach Möglichkeit nichts an und wenn doch, vermeiden Sie Berührungen in Ihrem Gesicht und waschen Sie sich nach dem Nachhausekommen umgehend die Hände. Achten Sie auf die Verhaltensregeln: stets in die Ellenbeuge oder ins Taschentuch husten oder niesen.</p>`,
    `
<h1>50%</h1>
<p></p>`    ,
    `
<h1>75%</h1>
<p></p>`,
    `
<h1>Melden Sie sich</h1>
<p>Die Eindämmung des Virus hat momentan oberste Priorität. Deshalb steht jeder, der potentiell infiziert ist, in der Pflicht, dies den zuständigen Behörden zu melden. Entscheidend an dieser Stelle ist, dass Sie unter keine Umständen einfach in eine Arztpraxis gehen, um sich untersuchen zu lassen.

Hier können Sie sich melden:
Rufen Sie Ihren Hausarzt an
Melden Sie sich beim kassenärztlichen Bereitschaftsdienst (116117)
Melden Sie sich direkt bei der Senatsgesundheitsverwaltung (030/90282828)

Da aktuell nur ein Verdacht auf eine Infektion besteht, entscheidet sich das weitere Vorgehen anhand der Symptome. Zeigen Sie bis dato keinerlei Symptome, kommt dennoch eine 14-tägige häusliche Quarantäne auf Sie zu, da die Inkubationszeit des Coronavirus bis zu 14 Tage andauern kann. Ohne Symptome wird vorerst kein Test durchgeführt. Währenddessen werden Sie aufgefordert, jeglichen Kontakt zu anderen Menschen zu meiden.</p>`,

]
let prozent = 0;
let btn = document.getElementsByClassName("antwort");
let counter = 0;
document.getElementById("Ja").addEventListener("click", () => {
    counter++;
    prozent += 5;
    mainfunc();
})
document.getElementById("Nein").addEventListener("click", () => {
    counter++;
    mainfunc();
})
function mainfunc() {
    console.log(counter);
    console.log(prozent)
    if (counter <= 17) {
        document.getElementById("frage").innerHTML = mainArray[counter].frage;
    } else if (counter = 18) {
        ergebnis();
        document.getElementById("frageBogen-div").style.display = "none";
    }
}
document.getElementById("FragebogenStarten").addEventListener("click", () => {
    document.getElementById("hinweise-div").style.display = "block";
    document.getElementById("FragebogenStarten").style.display = "none";
})
document.getElementById("start-btn").addEventListener("click", () => {
    mainfunc();
    document.getElementById("frageBogen-div").style.display = "block";
    document.getElementById("hinweise-div").style.display = "none";
})
function ergebnis() {
    if (prozent < 26) {
        document.getElementById("content").innerHTML = `${ergebnisArray[0]}`;
        document.getElementById("frageBogen-div").style.display = "none";
    } else if (prozent < 51) {
        document.getElementById("content").innerHTML = `${ergebnisArray[1]}`;
        document.getElementById("frageBogen-div").style.display = "none";
    } else if (prozent < 76) {
        document.getElementById("content").innerHTML = `${ergebnisArray[2]}`;
        document.getElementById("frageBogen-div").style.display = "none";
    } else if (prozent < 101) {
        document.getElementById("content").innerHTML = `${ergebnisArray[3]}`;
        document.getElementById("frageBogen-div").style.display = "none";
    }

}

