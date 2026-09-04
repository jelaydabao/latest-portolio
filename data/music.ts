// =============================================================
// MIXTAPES  —  paste your Spotify links here.
// =============================================================

export const music = {
  // Your main Spotify profile:
  spotifyProfile: "https://open.spotify.com/playlist/4S3ty4MUajbMOm9Max9yHl",

  // What you're currently looping (just text — shown on the deck):
  currentlyListening: "Anti-hero - Taylor Swift",

  // Individual playlists. `url` opens in a new tab.
  playlistLinks: [
    { name: "[late night coding]", url: "" },
    { name: "[rainy day]", url: "" },
    { name: "[focus]", url: "" },
    { name: "[good mood]", url: "" },
  ] as { name: string; url: string }[],

  songs: [
    { title: "Anti-hero", artist: "Taylor Swift", src: "/assets/audio/Anti-hero%20-%20Taylor%20Swift.mp3" },
    { title: "Good 4 u", artist: "Olivia Rodrigo", src: "/assets/audio/Good%204%20u%20-%20Olivia%20Rodrigo.mp3" },
    { title: "Manchild", artist: "Sabrina Carpenter", src: "/assets/audio/Manchild%20-%20Sabrina%20Carpenter.mp3" },
    { title: "That's So True", artist: "Gracie Abrams", src: "/assets/audio/That%27s%20So%20True%20-%20Gracie%20Abrams.mp3" },
  ],
}

// -------------------------------------------------------------
// BACKGROUND AUDIO
// Drop a royalty-free ambient loop at:
//   /public/assets/audio/room-ambience.mp3
// (the player works even if the file isn't there yet).
// -------------------------------------------------------------
export const audio = {
  ambience: "/assets/audio/room-ambience.mp3",
}
