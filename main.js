function NumerosAleatorios(min, max) { //Funcion para numeros de planetas aleatorios
  return Math.round(Math.random() * (max - min) + min);
}

const calcularSaltos = (planeta) => {//Esta funcion hace el calculo de saltos
  let CantidadSaltos = 0;
  while (planeta !== 1) {
    planeta = planeta % 2 === 0 ? planeta / 2 : planeta * 3 + 1;  // si son pares o impares
    CantidadSaltos++;
  }
  return CantidadSaltos; //Desde el otro planeta hasta la tierra
};

const main = () => {
  let planeta = 0;
    planeta = parseInt(NumerosAleatorios(10000, 11000) //Numero alazar entre esos rangos
    );
  
  while (true) {
    const numeroDeSaltos = calcularSaltos(planeta);
    console.log(
      `La nave de  el planeta ${planeta}  tiene que hacer ${numeroDeSaltos}  saltos para llegar a la Tierra.`
    );
    const continuar = prompt(
      "Los numero son aleatorios automaticamente se elijio uno ¿Desea continuar para otro planeta? (S/N)"
    ).toUpperCase();
    if (continuar !== "S") {
      break;
    }
    planeta = parseInt(NumerosAleatorios(10000, 11000) 
    );
  }
};
main();

