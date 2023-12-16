
const playlist = {
    title: "Hip-Hop Hits",
    coverImageUrl: "./playlist1.png",
    info: {
        totalTracksCount: 4,
        totalTracksDurationInSeconds: 733,
    },
    tracks: [
        {
            coverImageUrl: "track1.png",
            artistName: "Eminem",
            title: "Rap God",
            fileUrl: "Eminem_-_Rap_God.mp3",
            isHot: false,
        },
        {
            coverImageUrl: "track2.png",
            artistName: "50cent",
            title: "In da Club",
            fileUrl: "50_Cent_-_In_Da_Club_FlexyOkay.com.mp3",
            isHot: true,
        },
    ],
};

renderPlaylist(playlist)

function renderPlaylist(playlistForRendering) {

}