export function toUpperFirstChar(string) {
    if (string !== typeof 'string') {
        return ''
    }
    return string.charAt(0).toUpperCase() + string
}
