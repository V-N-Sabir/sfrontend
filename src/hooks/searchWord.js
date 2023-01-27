export const searchWord = (value, word) => {

   const val = value.indexOf(word)
if (val === -1) {
    // Не найдено
    return false
}
    return true
}