function add(){
    let firstDigit = prompt('input digit');
    let secondDigit = prompt('input digit');
    document.write('the sum of' + firstDigit + 'and' + secondDigit + 'is' + (parseInt(firstDigit) + parseInt(secondDigit)));
    return parseInt(firstDigit) + parseInt(secondDigit);
}
add()
document.write('<br>')

//MULTIPLICATION

document.write('<br>')
let multiply = '8 multiplied by 8 is'

document.write(multiply)
document.write('<br>')

let multyA = 8,
    multyB = 8;

    document.write(multyA * multyB)
    document.write('<br>')

//SUBTRACTION

document.write('<br>')
let subtraction = 'subtract 30 from 80 is'

document.write(subtraction)
document.write('<br>')

let minusA = 30,
    minusB = 80;
    
    document.write(minusA - minusB)
    document.write('<br>')
 
//DIVISION

document.write('<br>')
let division = '20 divided by 4 is'

document.write(division)
document.write('<br>')

let divA = 20,
    divB = 4;

    document.write(divA / divB)
    document.write('<br>')

//EXPONENTIAL

document.write('<br>')
let exponential = '4 raised to the power of 4 is'

document.write(exponential)
document.write('<br>')

let expA = 4,
    expB = 4;

    document.write(expA ** expB)