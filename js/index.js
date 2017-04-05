var n = Number(prompt("Please, input the number of Fibonacci sequence:"));

function fiboSeq(n) {
    var fib1 = 1, 
        fib2 = 1;
    for (var i = 3; i <= n; i++) {
        var res = fib1 + fib2;
        fib1 = fib2;
        fib2 = res;
    }    
    return fib2;
}

document.write("The value of \'n\' element in Fibonacce sequence:" + "<br>");
document.write(fiboSeq(n));