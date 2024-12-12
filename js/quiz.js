const dataset = [
    {
        question: "¿Qué es la minería de datos?",
        options: [
            "Proceso de extracción de minerales",
            "Proceso de extracción de información",
            "Proceso de extracción de datos de bases de datos",
            "Ninguna de las anteriores"
        ],
        answer: 1
    },
    {
        question: "¿Cuál es una técnica común en la minería de datos?",
        options: [
            "Clasificación",
            "Agrupamiento",
            "Regresión",
            "Todas las anteriores"
        ],
        answer: 3
    },
    {
        question: "¿Qué es el preprocesamiento de datos?",
        options: [
            "Eliminar datos",
            "Combinar datos",
            "Preparar los datos para el análisis",
            "Ninguna de las anteriores"
        ],
        answer: 2
    },
    {
        question: "¿Qué es la validación cruzada?",
        options: [
            
            "Técnica para limpiar datos",
            "Técnica para agrupar datos",
            "Ninguna de las anteriores",
            "Técnica para evaluar modelos",
        ],
        answer: 3
    },
    {
        question: "¿Qué es un árbol de decisión?",
        options: [
            "Algoritmo de agrupamiento",
            "Método de reducción de dimensionalidad",
            "Modelo predictivo",
            "Ninguna de las anteriores"
        ],
        answer: 2
    },
    {
        question: "¿Qué es el análisis de componentes principales (PCA)?",
        options: [
            "Método de reducción de dimensionalidad",
            "Algoritmo de clasificación",
            "Técnica de limpieza de datos",
            "Ninguna de las anteriores"
        ],
        answer: 0
    },
    {
        question: "¿Qué es el K-means?",
        options: [
            "Algoritmo de agrupamiento",
            "Algoritmo de clasificación",
            "Método de reducción de dimensionalidad",
            "Ninguna de las anteriores"
        ],
        answer: 0
    },
    {
        question: "¿Qué es el análisis de regresión?",
        options: [
            
            "Técnica para predecir valores discretos",
            "Técnica para predecir valores continuos",
            "Método de agrupamiento",
            "Ninguna de las anteriores"
        ],
        answer: 1
    },
    {
        question: "¿Qué es el análisis de correlación?",
        options: [
            "Eliminar datos",
            "Medir la relación entre variables",
            "Combinar datos",
            "Ninguna de las anteriores"
        ],
        answer: 1
    },
    {
        question: "¿Qué es el análisis de outliers?",
        options: [
            
            "Eliminar datos",
            "Agregar datos",
            "Identificar datos atípicos",
            "Ninguna de las anteriores"
        ],
        answer: 2
    },
    {
        question: "¿Qué es el aprendizaje supervisado?",
        options: [
            
            "Aprender sin datos etiquetados",
            "Aprender con datos etiquetados",
            "Eliminar datos",
            "Ninguna de las anteriores"
        ],
        answer: 1
    },
    {
        question: "¿Qué es el aprendizaje no supervisado?",
        options: [
            "Aprender sin datos etiquetados",
            "Aprender con datos etiquetados",
            "Eliminar datos",
            "Ninguna de las anteriores"
        ],
        answer: 0
    },
    {
        question: "¿Qué es el aprendizaje por refuerzo?",
        options: [
            "Aprender con datos etiquetados",
            "Aprender sin datos etiquetados",
            "Aprender mediante recompensas y castigos",
            "Ninguna de las anteriores"
        ],
        answer: 2
    },
    {
        question: "¿Qué es el análisis de series temporales?",
        options: [
            "Eliminar datos",
            "Analizar datos a lo largo del tiempo",
            "Agregar datos",
            "Ninguna de las anteriores"
        ],
        answer: 1
    },
    {
        question: "¿Qué es el análisis de asociación?",
        options: [
            "Eliminar datos",
            "Encontrar relaciones entre variables",
            "Agregar datos",
            "Ninguna de las anteriores"
        ],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

function loadQuestion() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';
    const data = dataset[currentQuestionIndex];
    const questionElement = document.createElement('div');
    questionElement.classList.add('question', 'mb-4');
    questionElement.innerHTML = `<h2 class="text-lg font-semibold mb-2">${data.question}</h2>`;
    
    const optionsList = document.createElement('ul');
    optionsList.classList.add('options', 'list-none', 'p-0');
    
    data.options.forEach((option, i) => {
        const optionItem = document.createElement('li');
        optionItem.classList.add('mb-2');
        optionItem.innerHTML = `<label class="flex items-center"><input type="radio" name="question" value="${i}" class="mr-2"> ${option}</label>`;
        optionsList.appendChild(optionItem);
    });
    
    questionElement.appendChild(optionsList);
    quizContainer.appendChild(questionElement);
    
    document.getElementById('next-btn').classList.remove('hidden');
    document.getElementById('submit-btn').classList.add('hidden');
}

function nextQuestion() {
    const selectedOption = document.querySelector(`input[name="question"]:checked`);
    if (selectedOption) {
        userAnswers[currentQuestionIndex] = parseInt(selectedOption.value);
        if (userAnswers[currentQuestionIndex] === dataset[currentQuestionIndex].answer) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < dataset.length) {
            loadQuestion();
        } else {
            showResult();
        }
    } else {
        showModal("Por favor, selecciona una opción.");
    }
}

function showResult() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';
    dataset.forEach((data, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question', 'mb-4');
        questionElement.innerHTML = `<h2 class="text-lg font-semibold mb-2">${data.question}</h2>`;
        
        const optionsList = document.createElement('ul');
        optionsList.classList.add('options', 'list-none', 'p-0');
        
        data.options.forEach((option, i) => {
            const optionItem = document.createElement('li');
            optionItem.classList.add('mb-2');
            const isCorrect = i === data.answer;
            const isSelected = userAnswers[index] === i;
            optionItem.innerHTML = `<label class="flex items-center ${isCorrect ? 'text-green-500' : isSelected ? 'text-red-500' : ''}"><input type="radio" name="question${index}" value="${i}" class="mr-2" disabled ${isSelected ? 'checked' : ''}> ${option}</label>`;
            optionsList.appendChild(optionItem);
        });
        
        questionElement.appendChild(optionsList);
        quizContainer.appendChild(questionElement);
    });
    
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Tu puntuación es: ${score} de ${dataset.length}`;
    resultElement.classList.remove('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('submit-btn').classList.add('hidden');
    document.getElementById('restart-btn').classList.remove('hidden');
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    loadQuestion();
    document.getElementById('next-btn').classList.remove('hidden');
    document.getElementById('submit-btn').classList.add('hidden');
    document.getElementById('restart-btn').classList.add('hidden');
    document.getElementById('result').classList.add('hidden');
}

function showModal(message) {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = message;
    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
}

document.getElementById('next-btn').addEventListener('click', nextQuestion);
document.getElementById('restart-btn').addEventListener('click', restartQuiz);
document.getElementById('modal-close-btn').addEventListener('click', closeModal);

window.onload = loadQuestion;