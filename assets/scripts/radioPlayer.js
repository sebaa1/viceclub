document.addEventListener('DOMContentLoaded', () => {
    let gameKey;
    const scriptTag = document.querySelector('script[src*="radioPlayer.js"]');
    if (scriptTag) {
        gameKey = scriptTag.getAttribute('data-game');
        console.log('Script tag encontrado, gameKey:', gameKey);
    } else {
        console.error('No se encontró el script tag');
    }
    if (!window.radioData || !window.radioData[gameKey]) {
        console.error('Datos no encontrados para el juego:', gameKey);
        return;
    }

    const data = window.radioData[gameKey];
    console.log('Datos cargados:', data);

    const radioTitle = document.getElementById('radio-title');
    const radioContainer = document.getElementById('radio-container');
    const progressBar = document.getElementById('progressBar');
    const progressThumb = document.getElementById('progressThumb');
    const progressBarContainer = document.getElementById('progressBarContainer');
    const nowPlaying = document.getElementById('nowPlaying');
    const playingImage = document.getElementById('playingImage');
    const playingTitle = document.getElementById('playingTitle');
    const currentTrack = document.getElementById('currentTrack');
    const timeCurrent = document.getElementById('timeCurrent');

    let currentAudio = null;
    let lastTrackText = '';

    radioTitle.textContent = data.title;
    console.log('Título establecido:', data.title);

    data.stations.forEach(station => {
    const wrapper = document.createElement('div');
    wrapper.className = 'station';

    const img = document.createElement('img');
    img.src = station.image;
    img.className = 'portada';
    img.alt = station.name;

    const audio = document.createElement('audio');
    audio.className = 'song';
    const source = document.createElement('source');
    source.src = station.audio;
    source.type = 'audio/mp3';
    audio.appendChild(source);

    wrapper.appendChild(img);
    wrapper.appendChild(audio);
    radioContainer.appendChild(wrapper);
});

const total = data.stations.length;
const columns = 4;
const remainder = total % columns;

if (remainder !== 0) {
    const emptyColumns = columns - remainder;
    const offset = Math.floor(emptyColumns / 2);

    const wrappers = radioContainer.querySelectorAll('.station');
    const firstOfLastRowIndex = total - remainder;
    wrappers[firstOfLastRowIndex].style.gridColumnStart = offset + 1;
}




    const audioElements = document.querySelectorAll('.song');
    const playImages = document.querySelectorAll('.station');

    if (audioElements.length === 0 || playImages.length === 0) {
        console.error('No se encontraron elementos de audio o imágenes después de generarlos');
        return;
    }

    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
        return hours > 0 
            ? `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`
            : `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function updateTrackInfo() {
        if (!currentAudio) return;

        const radioIndex = Array.from(audioElements).indexOf(currentAudio);
        const station = data.stations[radioIndex];
        const tracks = station.tracks || [];
        
        const currentTime = currentAudio.currentTime;
        let currentSong = tracks[0];
        
        for (let i = tracks.length - 1; i >= 0; i--) {
            if (currentTime >= tracks[i].time) {
                currentSong = tracks[i];
                break;
            }
        }
        
        let newTrackText;
    if (currentSong.song && currentSong.artist) {
        newTrackText = `${currentSong.artist} - ${currentSong.song}`;
        currentTrack.textContent = newTrackText;
        document.getElementById('currentTrackWrapper').style.display = 'block';
    } else {
        newTrackText = ' ';
        currentTrack.textContent = newTrackText;
        document.getElementById('currentTrackWrapper').style.display = 'none';
    }

    if (newTrackText !== lastTrackText) {
        lastTrackText = newTrackText;
        animateTrackText();
    }
}


    function updateProgressBar() {
        if (currentAudio && currentAudio.duration > 0) {
            const progress = (currentAudio.currentTime / currentAudio.duration) * 100;
            progressBar.style.width = `${progress}%`;
            progressThumb.style.left = `${progress}%`;
            timeCurrent.textContent = formatTime(currentAudio.currentTime);
            updateTrackInfo();
        }
    }

    function animateTrackText() {
        const trackElement = document.getElementById('currentTrack');
        const container = document.getElementById('currentTrackWrapper');
        
        if (!trackElement || !container) return;

        
        cancelAnimationFrame(trackElement.animationFrame);

        const containerWidth = container.offsetWidth;
        const textWidth = trackElement.scrollWidth;

        if (textWidth <= containerWidth) {
            trackElement.style.transform = 'translateX(0)';
            return;
        }

        const distance = textWidth - containerWidth;
        const duration = 5000;
        let startTime = null;

        function scroll(timestamp) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;

            
            const cycleTime = duration * 4; 
            const progress = (elapsed % cycleTime) / duration;

            let position;
            if (progress <= 1) {
                
                position = -distance * progress;
            } else if (progress <= 2) {
            
                position = -distance;
            } else if (progress <= 3) {
            
                position = -distance * (2 - progress);
            } else {
            
                position = 0;
            }

            trackElement.style.transform = `translateX(${position}px)`;
            trackElement.animationFrame = requestAnimationFrame(scroll);
        }

        trackElement.animationFrame = requestAnimationFrame(scroll);
    }

    audioElements.forEach(audio => {
        audio.addEventListener('timeupdate', updateProgressBar);
        audio.addEventListener('ended', () => {
            progressBar.style.width = '0%';
            progressThumb.style.left = '0%';
            timeCurrent.textContent = "0:00";
            currentTrack.textContent = "Canción: ";
            cancelAnimationFrame(currentTrack.animationFrame);
            
            const isAnyPlaying = Array.from(audioElements).some(a => !a.paused);
            if (!isAnyPlaying) {
                nowPlaying.classList.add('hidden');
            }
        });
    });

    progressBarContainer.addEventListener('click', (event) => {
        if (!currentAudio) return;

        const rect = progressBarContainer.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const percentage = clickX / rect.width;

        currentAudio.currentTime = percentage * currentAudio.duration;
        updateProgressBar();
    });

    playImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            const selectedAudio = audioElements[index];
            console.log('Clic en:', image.alt);

            if (currentAudio === selectedAudio && !selectedAudio.paused) {
                selectedAudio.pause();
                nowPlaying.classList.add('hidden');
                return;
            }

            audioElements.forEach(audio => {
                audio.pause();
                audio.currentTime = 0;
            });

            selectedAudio.play();
            currentAudio = selectedAudio;

            nowPlaying.classList.remove('hidden');
            const imgElement = image.querySelector('img');
            playingImage.src = imgElement?.src || '';
            playingTitle.textContent = `Reproduciendo: ${imgElement?.alt || 'Sin título'}`;

            updateTrackInfo();
        });
    });
});