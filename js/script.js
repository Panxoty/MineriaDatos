document.addEventListener('DOMContentLoaded', function () {
    const barChartCtx = document.getElementById('barChart').getContext('2d');
    const lineChartCtx = document.getElementById('lineChart').getContext('2d');
    const pieChartCtx = document.getElementById('pieChart').getContext('2d');

    const barChart = new Chart(barChartCtx, {
        type: 'bar',
        data: getRandomBarData(),
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const lineChart = new Chart(lineChartCtx, {
        type: 'line',
        data: getRandomLineData(),
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const pieChart = new Chart(pieChartCtx, {
        type: 'pie',
        data: getRandomPieData(),
        options: {
            responsive: true
        }
    });

    document.getElementById('randomizeBarData').addEventListener('click', function () {
        barChart.data = getRandomBarData();
        barChart.update();
    });

    document.getElementById('randomizeLineData').addEventListener('click', function () {
        lineChart.data = getRandomLineData();
        lineChart.update();
    });

    document.getElementById('randomizePieData').addEventListener('click', function () {
        pieChart.data = getRandomPieData();
        pieChart.update();
    });

    function getRandomBarData() {
        return {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            datasets: [{
                label: 'Ventas Mensuales de Tienda de Zapatos',
                data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000)),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        };
    }

    function getRandomLineData() {
        return {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            datasets: [{
                label: 'Accidentes Mensuales en Chile',
                data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                fill: false
            }]
        };
    }

    function getRandomPieData() {
        return {
            labels: ['SIDA', 'VIH', 'Gonorrea', 'Herpes Genital'],
            datasets: [{
                label: 'Personas con Enfermedades de Transmisión Sexual en Chile',
                data: Array.from({ length: 4 }, () => Math.floor(Math.random() * 500)),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        };
    }
});