const screens = {
    loader: document.getElementById('loader-screen'),
    welcome: document.getElementById('welcome-screen'),
    choice: document.getElementById('choice-screen'),
    name: document.getElementById('name-screen'),
    lobby: document.getElementById('lobby-screen')
};

let gameState = { type: null, name: null };

function selectPet(type) {
    gameState.type = type;
    screens.choice.classList.add('hidden');
    screens.name.classList.remove('hidden');
}

document.getElementById('ok-btn').addEventListener('click', () => {
    const name = document.getElementById('pet-name').value;
    if (name) {
        gameState.name = name;
        screens.name.classList.add('hidden');
        document.getElementById('pet-name-display').innerText = name;
        screens.lobby.classList.remove('hidden');
    }
});

window.onload = () => {
    setTimeout(() => {
        screens.loader.classList.add('hidden');
        screens.welcome.classList.remove('hidden');
        setTimeout(() => {
            screens.welcome.classList.add('hidden');
            screens.choice.classList.remove('hidden');
        }, 2000);
    }, 1500);
};
