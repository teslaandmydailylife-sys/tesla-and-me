// モーダル操作
const modal = document.getElementById("videoModal");
const iframe = document.getElementById("youtubePlayer");
const closeModal = document.querySelector(".close-modal");

function openVideo(videoId) {
    // 埋め込み用URLにパラメータを追加
    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    const player = document.getElementById("youtubePlayer");
    player.src = videoUrl;
    
    // iframeに属性を追加して自動再生を許可
    player.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
    
    document.getElementById("videoModal").style.display = "block";
    document.body.style.overflow = "hidden";
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
