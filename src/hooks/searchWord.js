export const searchWord = (value, word) => {

    //console.log("word === '500'", word === '500', word);

   const val = value.indexOf(word)
    if (val === -1) {
        // Не найдено
        return ''
    }

    if (word === '404') {
        return 'Пользователь с таким email уже существует !'
    } else if (word === '500') {
        return 'Не верно введён: email или пароль !'
    } else {
        return ''
    }
    
}

