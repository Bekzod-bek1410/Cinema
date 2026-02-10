const worldTop20 = [
    { name: "The Shawshank Redemption", year: 1994, imdb: 9.3, rank: 1, genre: "Drama", summary: "Adolatsiz hukm qilingan bankirning qamoqxonadagi hayoti va uning umidi haqida ajoyib hikoya." },
    { name: "The Godfather", year: 1972, imdb: 9.2, rank: 2, genre: "Crime, Drama", summary: "Italiya-Amerika mafiya oilasining qudrati va uning yangi vorisi haqidagi klassik asar." },
    { name: "The Dark Knight", year: 2008, imdb: 9.0, rank: 3, genre: "Action, Crime, Drama", summary: "Betmen Jokerga qarshi kurashadi, bu kurash Gotham shahrini butkul o'zgartirib yuboradi." },
    { name: "Schindler's List", year: 1993, imdb: 9.0, rank: 6, genre: "Biography, Drama, History", summary: "Ikkinchi jahon urushi davrida mingdan ortiq yahudiylarni qutqargan nemis tadbirkori haqida haqiqiy voqea." },
    { name: "12 Angry Men", year: 1957, imdb: 9.0, rank: 5, genre: "Crime, Drama", summary: "O'n ikki nafar hakam bir yigitning taqdirini hal qilishi kerak, ammo hamma narsa bir tushunchadan boshlanadi." },
    { name: "Inception", year: 2010, imdb: 8.8, rank: 13, genre: "Action, Sci-Fi", summary: "Tushlar ichida tush ko'rish va ma'lumotlarni o'g'irlash sirlari haqidagi murakkab film." },
    { name: "Interstellar", year: 2014, imdb: 8.7, rank: 24, genre: "Adventure, Drama, Sci-Fi", summary: "Insoniyatni saqlab qolish uchun koinotning eng uzoq nuqtalariga sayohat qilgan astronavtlar haqida." }
];

const uzbekTop20 = [
    { name: "Mahallada duv-duv gap", year: 1960, imdb: 8.2, rank: "O'zbek Klassikasi", genre: "Komediya, Melodrama", summary: "Toshkent mahallalaridan biridagi qiziqarli voqealar va insoniy munosabatlar haqida." },
    { name: "Abdullajon", year: 1991, imdb: 8.4, rank: "O'zbek Klassikasi", genre: "Fantastika, Komediya", summary: "O'zbek qishlog'iga tushib qolgan o'zga sayyoralik bola va uning qishloq ahliga yordami haqida." },
    { name: "Suyunchi", year: 1982, imdb: 8.1, rank: "O'zbek Klassikasi", genre: "Drama, Komediya", summary: "Anzurat buvining qishloq hayotidagi o'rni va uning qat'iy xarakteri haqidagi samimiy hikoya." },
    { name: "To'ylar muborak", year: 1978, imdb: 7.9, rank: "O'zbek Klassikasi", genre: "Komediya", summary: "Kuyovning to'y kuni duch kelgan qiziqarli va kulgili sarguzashtlari haqida." },
    { name: "Osman", year: 2011, imdb: 7.5, rank: "Zamonaviy", genre: "Drama", summary: "Murakkab taqdirli yigitning hayotda o'z yo'lini topishi haqidagi o'ylantiruvchi film." },
    { name: "Tangalik bolalar", year: 1990, imdb: 8.0, rank: "O'zbek Klassikasi", genre: "Drama, Bolalar", summary: "Bolalikning unutilmas onlari va do'stlik haqidagi ta'sirli hikoya." }
];

function showSection(section) {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('top-lists').classList.add('hidden');
    document.getElementById('home').classList.remove('active');

    if (section === 'home') {
        document.getElementById('home').classList.remove('hidden');
        document.getElementById('home').classList.add('active');
    } else if (section === 'top-world' || section === 'top-uzb') {
        const title = section === 'top-world' ? "Eng yaxshi 20 ta jahon kinosi" : "Eng yaxshi 20 ta o'zbek kinosi";
        const data = section === 'top-world' ? worldTop20 : uzbekTop20;

        document.getElementById('listTitle').innerText = title;
        document.getElementById('top-lists').classList.remove('hidden');
        renderGrid(data);
    }
}

function renderGrid(movies) {
    const grid = document.getElementById('listsGrid');
    grid.innerHTML = '';
    movies.forEach(movie => {
        const div = document.createElement('div');
        div.className = 'grid-item';
        div.innerHTML = `
            <h3>${movie.name} (${movie.year})</h3>
            <p>⭐ IMDb: ${movie.imdb}/10</p>
            <p>🌍 ${movie.rank}</p>
            <p>🎭 ${movie.genre}</p>
        `;
        div.onclick = () => displayMovie(movie);
        grid.appendChild(div);
    });
}

function displayMovie(movie) {
    const resultArea = document.getElementById('resultArea');
    resultArea.innerHTML = `
        <div class="movie-card">
            <div class="movie-info">
                <h2>🎥 ${movie.name} (${movie.year})</h2>
                <span class="info-badge badge-imdb">⭐ IMDb: ${movie.imdb}/10</span>
                <span class="info-badge badge-rank">🌍 Jahon reytingi: ${movie.rank}</span>
                <span class="info-badge badge-genre">🎭 Janr: ${movie.genre}</span>
                <p class="movie-summary">📝 <strong>Qisqacha mazmuni:</strong> ${movie.summary}</p>
            </div>
        </div>
    `;
    // Scroll to result
    resultArea.scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('searchBtn').onclick = () => {
    const term = document.getElementById('movieSearch').value.toLowerCase();
    if (!term) return;

    const allMovies = [...worldTop20, ...uzbekTop20];
    const found = allMovies.find(m => m.name.toLowerCase().includes(term));

    if (found) {
        displayMovie(found);
    } else {
        document.getElementById('resultArea').innerHTML = `
            <div class="glass-card" style="padding: 20px; border-radius: 15px; color: #ff4444;">
                <p>😔 Kechirasiz, bunday kino topilmadi. Iltimos, nomni qayta tekshiring yoki ro'yxatlardan qidiring.</p>
            </div>
        `;
    }
};

// Initial state
window.onload = () => {
    // Optionally pre-load something
};
