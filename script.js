document.addEventListener("DOMContentLoaded", () => {
    const songTitleInput = document.getElementById("songTitle");
    const artistNameInput = document.getElementById("artistName");
    const lyricLine = document.getElementById("lyricLine");
    const bgColorPicker = document.getElementById("bgColorPicker");
    const albumImageInput = document.getElementById("albumImageInput");

    const previewTitle = document.getElementById("previewTitle");
    const previewArtist = document.getElementById("previewArtist");
    const previewLyrics = document.getElementById("previewLyrics");
    const previewBox = document.getElementById("tile");
    const previewImage = document.getElementById("albumImage");

    console.log("songTitleInput:", songTitleInput);
    console.log("artistNameInput:", artistNameInput);
    console.log("previewTitle:", previewTitle);
    console.log("previewArtist:", previewArtist);
    console.log("previewLyrics:", previewLyrics);


    songTitleInput.addEventListener("input", (e) => {
        previewTitle.textContent = e.target.value || "Song Title";
    });


    artistNameInput.addEventListener("input", (e) => {
        previewArtist.textContent = e.target.value || "Artist Name";
    });


    lyricLine.addEventListener("input", () => {
        previewLyrics.textContent = lyricLine.value || "Your Quote/Lyric here";
    });


    bgColorPicker.addEventListener("input", (e) => {
        previewBox.style.backgroundColor = e.target.value;
    });


    albumImageInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            previewImage.src = reader.result;
        };
        reader.readAsDataURL(file);
        }
    });


    function downloadImage() {
        const element = document.getElementById("tile");
        html2canvas(element)
        .then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.download = "quotify.png";
            link.href = imgData;
            link.click();
        })
        .catch((err) => {
            console.error("Error generating image:", err);
        });
    }


    document.querySelector("button").addEventListener("click", downloadImage);
    });
