let text = 'hello WORLD';
const capitalizeAlpha = (text) => {
    text = text.split(' ');
    for (let i = 0; i < text.length; i++) {
        text[i] = text[i][0].toUpperCase() + text[i].slice(1).toLowerCase();
    }
    return text.join(' ');
};
console.log(capitalizeAlpha(text));