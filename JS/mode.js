// Fungsi toggle theme dengan animasi GSAP
function toggleTheme() {
  const htmlEl = document.documentElement;
  const isDark = htmlEl.classList.contains('dark');
  const newMode = isDark ? 'light' : 'dark';
  
  // Simpan ke localStorage
  localStorage.setItem('theme', newMode);
  
  // Mengambil elemen yang perlu dianimasikan
  const pageContent = document.body;
  const sunIcons = document.querySelectorAll('#sun-icon, #sun-icon-mobile');
  const moonIcons = document.querySelectorAll('#moon-icon, #moon-icon-mobile');
  const mainContent = document.querySelector('.bg-sakura');
  
  // Animasi fade out untuk seluruh halaman
  gsap.to(pageContent, {
    opacity: 0.85,
    duration: 0.3,
    ease: "power2.out",
    onComplete: function() {
      // Animasikan ikon sesuai tema
      if (isDark) {
        // Transisi dari dark ke light
        moonIcons.forEach(icon => icon.classList.add('hidden'));
        sunIcons.forEach(icon => icon.classList.remove('hidden'));
      } else {
        // Transisi dari light ke dark
        sunIcons.forEach(icon => icon.classList.add('hidden'));
        moonIcons.forEach(icon => icon.classList.remove('hidden'));
      }
      
      // Toggle dark class
      htmlEl.classList.toggle('dark');
      
      // Animasi fade in setelah perubahan tema
      gsap.to(pageContent, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.in"
      });
    }
  });
  
  // Animasi khusus untuk ikon yang muncul (dengan rotasi dan scale)
  const iconsToShow = isDark ? sunIcons : moonIcons;
  gsap.fromTo(iconsToShow, 
    { opacity: 0, rotation: -30, scale: 0.7 },
    { 
      opacity: 1, 
      rotation: 0, 
      scale: 1,
      duration: 0.5,
      ease: "back.out(1.7)",
      delay: 0.3
    }
  );
}

// Event listener untuk kedua tombol
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
document.getElementById('theme-toggle-mobile').addEventListener('click', toggleTheme);

// Cek tema tersimpan pada saat halaman dimuat
const savedTheme = localStorage.getItem('theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Terapkan tema tanpa animasi saat halaman pertama kali dimuat
if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
  document.documentElement.classList.add('dark');
  document.querySelectorAll('#sun-icon, #sun-icon-mobile').forEach(icon => icon.classList.add('hidden'));
  document.querySelectorAll('#moon-icon, #moon-icon-mobile').forEach(icon => icon.classList.remove('hidden'));
}