var arr = []
var arr1 = new Array();


var numarray = [1, 2, 3];
var numarray1 = new Array();

for (let i = 0; i < numarray.length; i++) {
    process.stdout.write((numarray[i]).toString() + " ");

}
numarray.reverse();



for (let i = numarray.length - 1; i >= 0; i--) {
    process.stdout.write((numarray[i]).toString() + " ");

}
console.log(numarray)