const carro = (marca, modelo, ano) => {
    if (marca === undefined || modelo === undefined || ano === undefined) {
        throw new Error("Todos os parâmetros devem ser fornecidos");
    } else if(marca == "ferrari" && modelo == "f40" && ano == 1992) {
        return "Carro especial: Ferrari F40 de 1992";
    }
}

console.log(carro("ferrari", "f40", 1992));