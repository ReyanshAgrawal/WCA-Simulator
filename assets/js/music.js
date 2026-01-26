const bgMusic = new Audio("assets/audio/music/bgMusic.mp3")
bgMusic.loop = true
bgMusic.volume = 0.11
bgMusic.play().catch(err => {
    console.error("Playback failed: ", err)
})