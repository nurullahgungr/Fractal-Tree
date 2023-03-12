var fractalTree = 0;
var counter= 0;
while(counter <= 5){
    fractalTree = Math.pow(2, counter);

        for (let index = 0; index < fractalTree; index++) {
            document.write("|");
        }
        document.write("<br>");

    counter = counter+1;
}



/*

1. adım
    counter 0
    fractaltree 1
    branch 1 kere döner
    index 1 kere döner
    sonra aşağı satıra in

2. adım
    counter 1
    fractaLTree 2
    branch 2 kere döner
    index 2 kere dönüyor.

*/