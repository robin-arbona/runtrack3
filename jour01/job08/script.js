function sommenombrespremiers(a,b){
    if(premier(a) && premier(b)){
        return a + b;
    } else {
        return false;
    }

}
function premier(int){
    for (let i = 2; i < int; i++) {
        if(int%i==0){
            return false;
        }
    }
    return true;
}
console.log(sommenombrespremiers(5,7));
console.log(sommenombrespremiers(2,8));