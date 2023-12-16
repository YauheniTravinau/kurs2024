for (let i = 0; i < playlistForRendering.tracks.length; i++) {
    const track = playlistForRendering.tracks[i];
    renderTrack(track);
}
// Этот код использует цикл для отрисовки треков из массива playlistForRendering.tracks. Такой подход более гибок, поскольку не требует заранее знания количества элементов в массиве.

// Создаем переменную playlists и помещаем 2 плейлиста в массив
const playlists = [
    { name: 'Playlist 1', tracks: [...] }, // здесь должен быть массив треков
    { name: 'Playlist 2', tracks: [...] }  // здесь должен быть массив треков
];

// Создаем функцию renderPlaylists, которая принимает массив плейлистов
function renderPlaylists(playlists) {
    // Используем цикл для отрисовки каждого плейлиста
    for (let i = 0; i < playlists.length; i++) {
        const playlist = playlists[i];
        renderPlaylist(playlist); // Предположим, у вас есть функция renderPlaylist
    }
}

// Вызываем функцию, передавая ей массив плейлистов
renderPlaylists(playlists);