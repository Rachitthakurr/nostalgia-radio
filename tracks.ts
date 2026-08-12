export type Track = {
  id: string;
  title: string;
  artist: string;
  film: string;
  year: number;
  /** seconds — used only until the YouTube player reports the real duration */
  duration: number;
  videoId: string;
};

export type Playlist = {
  id: string;
  name: string;
  tagline: string;
  tracks: Track[];
};

/**
 * RIGHTS NOTE
 * -----------
 * Every videoId below points at the rights holder's OWN official YouTube
 * channel (YRF, Saregama, Sony Music India, T-Series, Ishtar Music) with
 * embedding enabled, and the player is rendered visibly. The songs themselves
 * are still copyrighted — playback is licensed through YouTube's embed, so do
 * not swap in fan re-uploads.
 *
 * To add a song, change ONE line: the `videoId`.
 */

export const playlists: Playlist[] = [
  {
    id: "golden",
    name: "Golden Hour",
    tagline: "90s romance from the cassette shelf",
    tracks: [
      {
        id: "golden-1",
        title: "Tujhe Dekha To Ye Jana Sanam",
        artist: "Lata Mangeshkar, Kumar Sanu",
        film: "Dilwale Dulhania Le Jayenge",
        year: 1995,
        duration: 314,
        videoId: "cNV5hLSa9H8", // YRF — official
      },
      {
        id: "golden-2",
        title: "Pehla Nasha",
        artist: "Udit Narayan, Sadhana Sargam",
        film: "Jo Jeeta Wohi Sikandar",
        year: 1992,
        duration: 308,
        videoId: "Ki41AKu0iHc", // Saregama Music — official
      },
      {
        id: "golden-3",
        title: "Chaand Taare",
        artist: "Abhijeet",
        film: "Yes Boss",
        year: 1997,
        duration: 313,
        videoId: "N3QzaUwml5w", // Ishtar Music — official
      },
    ],
  },
  {
    id: "monsoon",
    name: "Monsoon Tapes",
    tagline: "Rain on the awning, radio on low",
    tracks: [
      {
        id: "monsoon-1",
        title: "Ae Kash Ke Hum",
        artist: "Kumar Sanu",
        film: "Kabhi Haan Kabhi Naa",
        year: 1994,
        duration: 296,
        videoId: "Jtg2zyS_y_c", // Sony Music India VEVO — official
      },
      {
        id: "monsoon-2",
        title: "Kaash Kahin Aisa Hota",
        artist: "Kumar Sanu",
        film: "Mohra",
        year: 1994,
        duration: 307,
        videoId: "TRUuSFW80Rk", // Ishtar Music — official
      },
      {
        id: "monsoon-3",
        title: "Ghar Se Nikalte Hi",
        artist: "Udit Narayan",
        film: "Papa Kehte Hain",
        year: 1996,
        duration: 445,
        videoId: "0NT-xmLX4tk", // T-Series Bollywood Classics — official
      },
    ],
  },
  {
    id: "latenight",
    name: "Late Night Dub",
    tagline: "After the shutters come down",
    tracks: [
      {
        id: "late-1",
        title: "Yeh Kaali Kaali Aankhen",
        artist: "Kumar Sanu, Anu Malik",
        film: "Baazigar",
        year: 1993,
        duration: 449,
        videoId: "KC-DuX51NY0", // Ishtar Music — official
      },
      {
        id: "late-2",
        title: "Chura Ke Dil Mera",
        artist: "Kumar Sanu, Alka Yagnik",
        film: "Main Khiladi Tu Anari",
        year: 1994,
        duration: 454,
        videoId: "Yqj1_V90KJo", // Ishtar Music — official
      },
      {
        id: "late-3",
        title: "Tadap Tadap Ke",
        artist: "KK",
        film: "Hum Dil De Chuke Sanam",
        year: 1999,
        duration: 344,
        videoId: "KwiDJclWo44", // T-Series Bollywood Classics — official
      },
      {
        id: "late-4",
        title: "Kuch Kuch Hota Hai",
        artist: "Alka Yagnik, Udit Narayan",
        film: "Kuch Kuch Hota Hai",
        year: 1998,
        duration: 309,
        videoId: "bKZTnnFU9HA", // Sony Music India — official
      },
    ],
  },

  {
    id: "oldisgold",
    name: "Old is Gold",
    tagline: "Evergreen classics, straight from Saregama",
    tracks: [
      {
        // Saregama Music — the rights holder's own official upload, embedding enabled.
        id: "oldisgold-1",
        title: "Old is Gold — Evergreen Hindi Songs",
        artist: "Saregama Music",
        film: "Compilation",
        year: 1970,
        duration: 3600,
        videoId: "sCIiVN0zIGE",
      },
    ],
  },
];


export function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}
