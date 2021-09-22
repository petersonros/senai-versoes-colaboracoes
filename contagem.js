var quantidadeDeAlunos = 14;

for (var contador = 0; contador < quantidadeDeAlunos; contador++){
    if (contador == 0){
        console.log("O número é zero");
    }
    else if(contador % 2 == 0){
        console.log(contador + " O número é par");
    }
    else{
        console.log(contador + " O número é impar");
    }
}