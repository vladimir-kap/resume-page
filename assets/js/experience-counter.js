// Счетчик опыта работы
function calculateExperience() {
    const startDate = new Date('2018-12-24'); // Дата начала работы

    // Получаем текущую дату
    const currentDate = new Date();

    // Вычисляем разницу между текущей датой и датой начала работы
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();

    // Если текущий месяц меньше месяца начала работы, уменьшаем количество лет на 1 и добавляем 12 месяцев
    if (months < 0) {
        years--;
        months += 12;
    }

    // Функция для определения правильного окончания для слова "год"
    function getYearEnding(years) {
        if (years % 10 === 1 && years % 100 !== 11) {
            return 'год';
        } else if (years % 10 >= 2 && years % 10 <= 4 && (years % 100 < 10 || years % 100 >= 20)) {
            return 'года';
        } else {
            return 'лет';
        }
    }

    // Функция для определения правильного окончания для слова "месяц"
    function getMonthEnding(months) {
        if (months % 10 === 1 && months % 100 !== 11) {
            return 'месяц';
        } else if (months % 10 >= 2 && months % 10 <= 4 && (months % 100 < 10 || months % 100 >= 20)) {
            return 'месяца';
        } else {
            return 'месяцев';
        }
    }

    // Формируем строку с опытом работы
    const experienceString = `${years} ${getYearEnding(years)} ${months} ${getMonthEnding(months)}`;

    return experienceString;
}

// Функция для обновления текста с опытом работы
function updateExperienceText() {
    const experienceText = calculateExperience();
    
    // Обновляем основной счетчик опыта
    const experienceElement = document.getElementById('experience-text');
    if (experienceElement) {
        experienceElement.textContent = experienceText;
    }
    
    // Обновляем счетчик опыта в мета-информации
    const experienceMetaElement = document.getElementById('experience-text-meta');
    if (experienceMetaElement) {
        experienceMetaElement.textContent = experienceText;
    }
}

// Запускаем обновление при загрузке страницы
document.addEventListener('DOMContentLoaded', updateExperienceText); 