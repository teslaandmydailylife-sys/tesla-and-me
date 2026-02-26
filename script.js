// モーダル操作
const modal = document.getElementById("videoModal");
const iframe = document.getElementById("youtubePlayer");
const closeModal = document.querySelector(".close-modal");

function openVideo(videoId) {
    const modal = document.getElementById("videoModal");
    const iframe = document.getElementById("youtubePlayer");
    
    // 埋め込み用URL（自動再生・関連動画オフ・ロゴ最小化）
    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    
    iframe.src = videoUrl;
    iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
    
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // 背景固定
}

// モーダルを閉じる処理
document.querySelector(".close-modal").onclick = closeModal;
window.onclick = function(event) {
    if (event.target == document.getElementById("videoModal")) {
        closeModal();
    }
};

function closeModal() {
    const modal = document.getElementById("videoModal");
    const iframe = document.getElementById("youtubePlayer");
    modal.style.display = "none";
    iframe.src = ""; // 再生停止
    document.body.style.overflow = "auto";
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
