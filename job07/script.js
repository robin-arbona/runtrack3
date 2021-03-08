function jourtravaille(date){
    date.setHours(0);
    date.setMilliseconds(0);
    date.setMinutes(0);
    const jf=[
        new Date(2020,0,01),
        new Date(2020,03,13),
        new Date(2020,04,01),
        new Date(2020,04,08),
        new Date(2020,04,21),
        new Date(2020,05,01),
        new Date(2020,06,14),
        new Date(2020,07,15),
        new Date(2020,9,01),
        new Date(2020,10,01),
        new Date(2020,11,25)
    ];
    const wd=[
        'dimanche',
        'lundi',
        'mardi',
        'mercredi',
        'jeudi',
        'vendredi',
        'samedi',
    ];
    const month=[
        'janvier',
        'fevrier',
        'mars',
        'avril',
        'mai',
        'juin',
        'juillet',
        'aout',
        'septembre',
        'octobre',
        'novembre',
        'decembre'
    ];


    for (let i = 0; i < jf.length; i++) {
        if( (date -jf[i])==0){
            console.log("Le " + wd[date.getDay()] + " " + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear() + " est un jour férié");
            return;
        }
    }

    if((date.getDay() == 0 )|| (date.getDay() == 6 )){
        console.log("Non, " + wd[date.getDay()] + " " + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear() + " est un weekend");
        return;
    }

    console.log("Oui, " + wd[date.getDay()] + " " + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear() + " est jour travaillé");

}

$date = new Date(2020,0,01,01);
jourtravaille($date);

$date = new Date(2020,03,13,01);
jourtravaille($date);

$date = new Date(2020,04,02,01);
jourtravaille($date);

$date = new Date(2020,04,03,01);
jourtravaille($date);

$date = new Date(2020,04,04,01);
jourtravaille($date);