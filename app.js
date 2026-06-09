let petData = { type: '', name: '' };

window.onload = () => {
    // 1. Загрузка -> Приветствие
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
        const hello = document.getElementById('hello');
        hello.classList.remove('hidden');
        
        // 2. Приветствие -> Выбор (через 2 сек)
        setTimeout(() => {
            hello.classList.add('hidden');
            document.getElementById('choice').classList.remove('hidden');
        }, 2000);
    }, 2000);
};

function selectPet(type) {
    petData.type = type;
    document.getElementById('choice').classList.add('hidden');
    document.getElementById('naming').classList.remove('hidden');
}

function confirmName() {
    petData.name = document.getElementById('nameInput').value;
    document.getElementById('petNameDisplay').innerText = petData.name;
    document.getElementById('petSprite').src = petData.type + '.png'; // Файлы должны быть dog.png или cat.png
    
    document.getElementById('naming').classList.add('hidden');
    document.getElementById('game').classList.remove('hidden');
}
