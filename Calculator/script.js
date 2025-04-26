const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const historyList = document.getElementById('historyList');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('clear')) {
            display.textContent = '';
        } else if (button.classList.contains('equal')) {
            try {
                let result = eval(display.textContent);
                addToHistory(display.textContent + ' = ' + result);
                display.textContent = result;
            } catch {
                display.textContent = 'Error';
            }
        } else {
            display.textContent += button.textContent;
        }
    });
});

function addToHistory(entry) {
    const li = document.createElement('li');
    li.textContent = entry;
    historyList.prepend(li); // Latest on top
}
