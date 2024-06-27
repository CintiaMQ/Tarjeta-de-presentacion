document.querySelector('.profile-img').addEventListener('click', () => {
  document.querySelector('.card').classList.toggle('flipped');
});

document.querySelector('.card-back').addEventListener('click', () => {
  document.querySelector('.card').classList.toggle('flipped');
});

document.getElementById('shareButton').addEventListener('click', async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Tarjeta de Presentación',
        text: 'Mira mi tarjeta de presentación digital',
        url: window.location.href
      });
      console.log('Contenido compartido con éxito');
    } catch (error) {
      console.error('Error al compartir:', error);
    }
  } else {
    alert('La API de compartir no es compatible con este navegador.');
  }
});
