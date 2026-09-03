// =============================================================
// MIXTAPES  —  paste your Spotify links here.
// =============================================================

export const music = {
  // Your main Spotify profile:
  spotifyProfile: "PASTE_SPOTIFY_LINK_HERE",

  // What you're currently looping (just text — shown on the deck):
  currentlyListening: "[song — artist]",

  // Individual playlists. `url` opens in a new tab.
  playlistLinks: [
    { name: "[late night coding]", url: "" },
    { name: "[rainy day]", url: "" },
    { name: "[focus]", url: "" },
    { name: "[good mood]", url: "" },
  ] as { name: string; url: string }[],
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
