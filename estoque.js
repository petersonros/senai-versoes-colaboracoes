// Variavel
var estoque = 30;

// Se estoque for maior que 80 então "Estoque alto"
if (estoque > 80){
    console.log("Estoque alto");
}

// Se estoque for igual ou maior que 30 então "Estoque normal"
else if (estoque >= 30){
    console.log("Estoque normal");
}

// Senão "Estoque baixo"
if (estoque < 30){
    console.log("Estoque baixo");
}

// acima de 80 deve retornar "Estoque alto"
// entre 31 e 80 deve retornar "Estoque normal"
// abaixo de 30 deve retornar "Estoque baixo"