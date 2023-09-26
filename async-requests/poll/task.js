const titleElement = document.getElementById('poll__title');
const answersElement = document.getElementById('poll__answers');

function fetchSurveyData() {
    return fetch('https://students.netoservices.ru/nestjs-backend/poll')
        .then(response => response.json())
        .then(data => data.data)
        .catch(error => {
        console.error('Error fetching survey data:', error);
        return null;
        });
}

function updateSurvey(data) {
    titleElement.textContent = data.title;
    answersElement.innerHTML = '';

    data.answers.forEach(answer => {
        const button = document.createElement('button');
        button.classList.add('poll__answer');
        button.textContent = answer;
        button.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');
        });

        answersElement.appendChild(button);
    });
}

function loadSurvey() {
    fetchSurveyData()
        .then(data => {
        if (data) {
            updateSurvey(data);
        }
        });
}

loadSurvey();

