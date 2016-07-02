// JavaScript File
function D(a, b, c){
    var X1, X2, X, D;
    D = b*b - 4*a*c;
 

    alert('D=' + D);
    if (D>0){
        X1=(-b - Math.sqrt(D))/(2*a);
        X2= (-b + Math.sqrt(D))/(2*a);
        alert('X1=' + X1);   
        alert('X2=' + X2);
    }
    else if(D<0){
         alert('Рівняння не має коренів');
     }
    else if (D=0){
            X = -b/2;
            alert('Рівняння маодин корінь + X)
            
        }
     
}
var a = Number(prompt('Значення а')
var b = Number(prompt('Значення b')
var c = Number(prompt('Значення с')
squere(a,b,c);