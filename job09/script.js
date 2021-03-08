function tri(numbers,order){
    if(order == 'asc'){
        return numbers.sort(function(a, b){return a-b});
    } else if (order == 'desc'){
        return numbers.sort(function(a, b){return a-b}).reverse();
    }
}

const numbers = [ 1 , 2 , 5 , 19 , 20 , 12 , 24, 3];
const order = 'asc';

console.log(tri(numbers,order));
console.log(tri(numbers,'desc'));