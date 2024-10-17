// Функция для генерации пароля с возможностью настройки
function generatePassword(options = {}) {
    // Деструктуризация объекта с параметрами. Если параметры не переданы, будут использованы значения по умолчанию:

    // Опции по умолчанию
    const {
        length = 12,  // Длина пароля 
        useLetters = true,  // Включить буквы в пароль 
        useNumbers = true,  // Включить цифры в пароль 
        useSymbols = true  // Включить символы в пароль 
    } = options;

    // Строки, содержащие возможные символы для пароля:
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';  // Буквы (заглавные и строчные)
    const numbers = '0123456789';  // Цифры
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';  // Специальные символы

    // Строка, которая будет содержать все доступные символы, исходя из настроек пользователя.
    let availableChars = '';

    // Добавялем параметры к возможным символам в пароле если они были выбраны
    
    if (useLetters) availableChars += letters;
    if (useNumbers) availableChars += numbers;
    if (useSymbols) availableChars += symbols;

    // Если ни один тип символов не выбран (пустая строка для availableChars),
    // Выбрасывается ошибка с предупреждением что ни один из типов символов не выбран и с просьбой включить хотябы один из них
    if (!availableChars) {
        throw new Error('Типы символов не выбраны. Пожалуйста, включите буквы, цифры или символы.');
    }

    // Переменная, в которую будет записан сгенерированный пароль.
    let password = '';

    // Цикл для генерации пароля. Он повторяется столько раз, сколько указано в параметре length.
    for (let i = 0; i < length; i++) {
        // Генерируем случайный индекс для выбора символа из availableChars.
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        // Добавляем случайно выбранный символ к паролю.
        password += availableChars[randomIndex];
    }

    // Возвращаем сгенерированный пароль.
    return password;
}

module.exports = {generatePassword};
