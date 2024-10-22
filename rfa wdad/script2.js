const ctx = document.getElementById('myChart').getContext('2d');

// Dados do gráfico
const data = {
    labels: ['Adultos', 'Crianças', 'Idosos'],
    datasets: [{
        label: 'Quantidade de Pessoas',
        data: [20, 85, 18], // Quantidades de pessoas por categoria
        backgroundColor: ['#3498db', '#2ecc71', '#e67e22'],
        borderColor: ['#2980b9', '#27ae60', '#d35400'],
        borderWidth: 1
    }]
};

// Configurações do gráfico
const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 10
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: '#333',
                    font: {
                        size: 14
                    }
                }
            },
            title: {
                display: true,
                text: 'Distribuição de Pessoas por Categoria',
                color: '#333',
                font: {
                    size: 18
                }
            }
        }
    }
};

// Renderizando o gráfico
new Chart(ctx, config);