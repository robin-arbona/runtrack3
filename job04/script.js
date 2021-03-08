function bisextile(annee){
    let date1 = new Date(annee,01,01,00);
    let date2 = new Date(annee+1,01,01,00);
    const diff = (date2-date1)/(1000*3600*24);
    if(diff == 366){
        return true;
    } else {
        return false;
    }
}