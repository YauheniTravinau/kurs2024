alert('hello from it-incubator');

// Создание элемента заголовка (h1) и добавление текста к этому элементу
const titleElement = document.createElement('h1');
titleElement.append('Hello from it-incubator');

// Добавление элемента заголовка в тело документа
document.body.append(titleElement);

// Данные для отображения
const info = {
    title: 'it-incubator',
    graduatesCount: 2000,
    areYouChampion: true,
    technologies: [
        { id: 1, title: 'Front' },
        { id: 2, title: 'Back' },
        { id: 3, title: 'DevOps' }
    ],
    playlist: {
        title: 'My Awesome Playlist',
        tracks: [
            {
                title: 'Track 1',
                artist: 'Artist 1',
                image: 'track1.jpg',
                audio: 'track1.mp3'
            },
            {
                title: 'Track 2',
                artist: 'Artist 2',
                image: 'track2.jpg',
                audio: 'track2.mp3'
            }
        ]
    }
}

// Отображение данных на UI
let pageTitleElement = document.createElement('h1');
pageTitleElement.innerText = info.title;
document.body.append(pageTitleElement);

let graduatesCountElement = document.createElement('input');
graduatesCountElement.value = info.graduatesCount;
document.body.append(graduatesCountElement);

let areYouChampionElement = document.createElement('input');
areYouChampionElement.type = 'checkbox';
areYouChampionElement.checked = info.areYouChampion;
document.body.append(areYouChampionElement);

// Создание выпадающего списка (select)
const techSelectElement = document.createElement('select');

// Использование forEach для прохода по массиву объектов
info.technologies.forEach((tech) => {
    // Создание варианта (option) для выпадающего списка
    const techSelectOptionElement = document.createElement('option');
    techSelectOptionElement.value = tech.id;
    techSelectOptionElement.append(tech.title); // Добавление значения из объекта
    techSelectElement.append(techSelectOptionElement); // Добавление варианта в выпадающий список
});

// Добавление выпадающего списка в тело документа
document.body.append(techSelectElement);

// Отображение плейлиста на UI
renderPlaylist(info.playlist);

function renderPlaylist(playlistForRendering) {
    renderPlaylistHeader(playlistForRendering);
    playlistForRendering.tracks.forEach(track => renderTrack(track));
}

function renderPlaylistHeader(inputPlaylistForRendering) {
    const playlistHeaderElement = document.createElement('h2');
    playlistHeaderElement.innerText = inputPlaylistForRendering.title;
    document.body.append(playlistHeaderElement);
}

function renderTrack(inputTrackForRendering) {
    const trackContainer = document.createElement('div');

    // Image
    const imageElement = document.createElement('img');
    imageElement.src = inputTrackForRendering.image;
    trackContainer.append(imageElement);

    // Track Info
    const trackInfoElement = document.createElement('div');
    trackInfoElement.innerHTML = `<p>Title: ${inputTrackForRendering.title}</p><p>Artist: ${inputTrackForRendering.artist}</p>`;
    trackContainer.append(trackInfoElement);

    // Audio Player
    const audioElement = document.createElement('audio');
    audioElement.src = inputTrackForRendering.audio;
    audioElement.controls = true;
    trackContainer.append(audioElement);

    document.body.append(trackContainer);
}