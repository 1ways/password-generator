const generateBtn = document.getElementById('generate-btn')
const firstPasswordEl = document.getElementById('first-password')
const secondPasswordEl = document.getElementById('second-password')
const passwordLengthEl = document.getElementById('password-length')

const symbolsCheckbox = document.getElementById('symbols')
const numbersCheckbox = document.getElementById('numbers')

if (firstPasswordEl.textContent === '' && secondPasswordEl.textContent === '') {
    firstPasswordEl.classList.add('empty')
    secondPasswordEl.classList.add('empty')
}

const generatePassword = (passwordLength, hasSymbols, hasNumbers) => {
    let password = ''

    const characters = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '~',
        '`',
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '_',
        '-',
        '+',
        '=',
        '{',
        '[',
        '}',
        ']',
        ',',
        '|',
        ':',
        ';',
        '<',
        '>',
        '.',
        '?',
        '/',
    ]

    const symbols = [
        '~',
        '`',
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '_',
        '-',
        '+',
        '=',
        '{',
        '[',
        '}',
        ']',
        ',',
        '|',
        ':',
        ';',
        '<',
        '>',
        '.',
        '?',
        '/',
    ]

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)

        if (hasNumbers && hasSymbols) {
            password += characters[randomIndex]
        } else if (hasNumbers === false && hasSymbols === false) {
            if (
                isNaN(characters[randomIndex]) === true &&
                symbols.includes(characters[randomIndex]) === false
            ) {
                password += characters[randomIndex]
            }
        } else if (hasNumbers === true && hasSymbols === false) {
            if (symbols.includes(characters[randomIndex]) === false) {
                password += characters[randomIndex]
            }
        } else if (hasNumbers === false && hasSymbols === true) {
            if (isNaN(characters[randomIndex]) === true) {
                password += characters[randomIndex]
            }
        }
    }

    return password
}

generateBtn.addEventListener('click', () => {
    if (passwordLengthEl.value === '') {
        passwordLengthEl.value = 15
    }
    if (
        !isNaN(passwordLengthEl.value) &&
        +passwordLengthEl.value > 4 &&
        +passwordLengthEl.value < 31
    ) {
        const firstPassword = generatePassword(
            +passwordLengthEl.value,
            symbolsCheckbox.checked,
            numbersCheckbox.checked
        )
        const secondPassword = generatePassword(
            +passwordLengthEl.value,
            symbolsCheckbox.checked,
            numbersCheckbox.checked
        )

        firstPasswordEl.textContent = firstPassword
        secondPasswordEl.textContent = secondPassword

        firstPasswordEl.classList.remove('empty')
        secondPasswordEl.classList.remove('empty')

        firstPasswordEl.classList.add('full')
        secondPasswordEl.classList.add('full')
    } else {
        alert('Use only numbers in rage of 5 to 30!')
    }
})

const copyPasswordToClipboard = (element) => {
    if (element.classList.contains('full')) {
        navigator.clipboard.writeText(element.textContent)

        element.dataset.text = 'Copied!'
    }
}

firstPasswordEl.addEventListener('mouseover', (e) => {
    e.target.dataset.text = 'Click to copy'
})
secondPasswordEl.addEventListener('mouseover', (e) => {
    e.target.dataset.text = 'Click to copy'
})

firstPasswordEl.addEventListener('click', (e) =>
    copyPasswordToClipboard(firstPasswordEl)
)
secondPasswordEl.addEventListener('click', (e) =>
    copyPasswordToClipboard(secondPasswordEl)
)
