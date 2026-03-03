function index2(){
    const sound = document.getElementById("click-audio");
    if (!sound) {   
        console.warn("Audio element not found");
        window.location.href = "index2.html";
        return;
    }

    // try to play the audio and only navigate after it finishes
    sound.play().then(() => {
        // when playback ends, change page
        sound.addEventListener('ended', () => {
            window.location.href = "index2.html";
        });
    }).catch((err) => {
        // playback may have been blocked or the file missing
        console.error("Audio play failed:", err);
        // still navigate so the user isn't stuck
        window.location.href = "index2.html";
    });
 
}


