// Game Modal Controller
let currentGameUrl = '';

function openGameModal(gameUrl, gameTitle) {
  currentGameUrl = gameUrl;
  const modal = document.getElementById('gameModal');
  const gameFrame = document.getElementById('gameFrame');
  const gameTitleEl = document.getElementById('gameModalTitle');
  
  gameFrame.src = gameUrl;
  gameTitleEl.textContent = gameTitle;
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent background scroll
}

let shouldCloseModal = false;

function closeGameModal() {
  const modal = document.getElementById('gameModal');
  const gameFrame = document.getElementById('gameFrame');
  
  // If in fullscreen, exit fullscreen and set flag to close after
  if (document.fullscreenElement) {
    shouldCloseModal = true;
    document.exitFullscreen();
  } else {
    // Close immediately if not in fullscreen
    modal.style.display = 'none';
    gameFrame.src = ''; // Stop game from running
    document.body.style.overflow = 'auto'; // Restore scroll
  }
}

function toggleFullscreen() {
  const modalContent = document.querySelector('.modal-content');
  
  if (!document.fullscreenElement) {
    modalContent.requestFullscreen().catch(err => {
      alert(`Error attempting to enable fullscreen: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
  const modal = document.getElementById('gameModal');
  if (event.target === modal && !document.fullscreenElement) {
    closeGameModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const modal = document.getElementById('gameModal');
    if (modal.style.display === 'block') {
      // If in fullscreen, exit fullscreen first
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        closeGameModal();
      }
    }
  }
});

// Update fullscreen button text when entering/exiting fullscreen
document.addEventListener('fullscreenchange', function() {
  const fullscreenBtn = document.getElementById('fullscreenBtn');
  const modal = document.getElementById('gameModal');
  const gameFrame = document.getElementById('gameFrame');
  
  if (document.fullscreenElement) {
    fullscreenBtn.innerHTML = '📺 Exit Fullscreen';
  } else {
    fullscreenBtn.innerHTML = '🔲 Fullscreen';
    
    // If we should close modal (user clicked X while in fullscreen)
    if (shouldCloseModal) {
      modal.style.display = 'none';
      gameFrame.src = ''; // Stop game from running
      document.body.style.overflow = 'auto'; // Restore scroll
      shouldCloseModal = false;
    }
  }
});
