// Valores de faturamento por estado
let faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Calcula o valor total do faturamento
let totalFaturamento = 0;
for (let estado in faturamento) {
    totalFaturamento += faturamento[estado];
}

// Calcula e exibe o percentual de representação de cada estado
for (let estado in faturamento) {
    let percentual = (faturamento[estado] / totalFaturamento) * 100;
    console.log(`${estado} - ${percentual.toFixed(2)}%`);
}
