const textSong = document.querySelector(".text-song");
let artistName = document.getElementById("artist-name");
let noArtist = document.getElementById("no-artist");
let songTitle = document.getElementById("song-title");
let noSong = document.getElementById("no-song");
let btn = document.getElementById("button");

const renderLyrics = function (data, className = "") {
  const html = `<div class="${className}"> ${data[0].lyrics} </div>`;
  textSong.insertAdjacentHTML("beforeend", html);
};

const noStringinsideForm = function () {
  if (artistName.value === "") {
    noArtist.innerText = "You have to type an Artist";
  } else {
    noArtist.innerText = "";
    btn.disabled = false;
  }

  if (songTitle.value === "") {
    noSong.innerText = "You have to type a song";
  } else {
    btn.disabled = false;
    noSong.innerText = "";
  }
};

btn.addEventListener("click", function () {
  noStringinsideForm();

  const valueOfFirstInput = artistName.value;

  const valueOfSecondInput = songTitle.value;

  fetch(`http://ianertson.com:3500/${valueOfFirstInput}/${valueOfSecondInput}`)
    .then((response) => response.json())
    .then((data) => {
      renderLyrics(data, "lyricsStyling");
      console.log(data);
    });
});
