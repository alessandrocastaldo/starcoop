// Seleziona il bottone a forma di cuore
var likeButton = document.getElementById('like-button');

// Inizializza il conteggio dei like
var likeCount = 0;

// Funzione per gestire il clic sul bottone a forma di cuore
function handleLikeClick() {
  // Incrementa il conteggio dei like
  likeCount++;

  // Aggiorna il testo del bottone con il nuovo conteggio
  likeButton.innerHTML = '<i class="fas fa-heart"></i> ' + likeCount + ' Likes';

  // Disabilita il clic successivo sul bottone
  likeButton.removeEventListener('click', handleLikeClick);
}

// Aggiungi il listener di eventi per il clic sul bottone a forma di cuore
likeButton.addEventListener('click', handleLikeClick);
