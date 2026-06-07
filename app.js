const screens = {
    loader: document.getElementById('loader-screen'),
    hello: document.getElementById('hello-screen'),
    input: document.getElementById('input-screen'),
    main: document.getElementById('main-screen')
};

// 1-2 сек загрузка -> hello
setTimeout(() => {
    screens.loader.classList.add('hidden');
    screens.hello.classList.remove('hidden');
}, 2000);

// через 3 сек -> ввод имени
setTimeout(() => {
    screens.hello.classList.add('hidden');
    screens.input.classList.remove('hidden');
}, 5000); // 2 + 3 сек

// Кнопка ОК
document.getElementById('ok-btn').addEventListener('click', () => {
    const name = document.getElementById('name-input').value;
    if (name) {
        document.getElementById('nickname-plate').innerText = name;
        screens.input.classList.add('hidden');
        screens.main.classList.remove('hidden');
    }
});
