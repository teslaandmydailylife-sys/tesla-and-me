// モーダル操作
const modal = document.getElementById("videoModal");
const iframe = document.getElementById("youtubePlayer");
const closeModal = document.querySelector(".close-modal");

function openVideo(videoId) {
    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    iframe.src = videoUrl;
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // スクロール防止
}

closeModal.onclick = function() {
    modal.style.display = "none";
    iframe.src = "";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        iframe.src = "";
        document.body.style.overflow = "auto";
    }
}

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
