document.querySelectorAll('.share-button').forEach(button => {
    button.addEventListener('click', async () => {
      const url = button.getAttribute('data-url'); // Prende l'URL dal pulsante

      if (navigator.share) {
        try {
          await navigator.share({
            title: document.title,
            text: 'Dai un\'occhiata a questo evento!',
            url: 'evento.html'
          });
          console.log('Condiviso con successo:', url);
        } catch (error) {
          console.error('Errore durante la condivisione:', error);
        }
      } else {
        alert('La condivisione non è supportata su questo browser.');
      }
    });
  });