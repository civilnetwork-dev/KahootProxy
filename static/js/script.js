window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', {
        scope: '/',
    });
});

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = form.querySelector('input');
    const value = input.value;
    if (value.startsWith('http://') || value.startsWith('https://')) {
        window.location.href = '/i/' + __uv$config.encodeUrl(value);
    } else {
        window.location.href = '/i/' + __uv$config.encodeUrl('https://www.google.com/search?q=' + value);
    }
});