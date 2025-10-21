const tombolSapa = document.getElementById('sapaButton')
tombolSapa.addEventListener('click', function(){
  alert('WASSUP DAWG!! THX already coming here');
});

toggleBtn.addEventListener("click", () => {
      body.classList.toggle("night");
      const isNight = body.classList.contains("night");
      toggleBtn.textContent = isNight ? "🌙" : "☀️";
    });
