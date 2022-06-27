const PESO_PADRAO_EM_KG = 66.5;
const ALTURA_PADRAO_EM_CM = 181;

const calculaImc = (peso, altura) => {
  console.log(`Peso: ${peso}, Altura:${altura}`);

  const alturaMetros = altura / 100;
  const alturaQuadrado = alturaMetros **2;

  const imc = (peso / alturaQuadrado);

  return imc
};

const main = () => {
  const imc = calculaImc(PESO_PADRAO_EM_KG, ALTURA_PADRAO_EM_CM);
  console.log(`IMC: ${imc.toFixed(2)}`);
}

main();