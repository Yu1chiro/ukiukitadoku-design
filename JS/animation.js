if (!localStorage.getItem("loadingScreenShown")) {
    // Jalankan animasi loading
    gsap.timeline()
        .to("#percentage", {
            duration: 3,
            innerText: 100,
            snap: { innerText: 1 },
            modifiers: {
                innerText: function(value) {
                    return Math.round(value) + "%";
                }
            },
            onUpdate: function() {
                const progress = Math.round(this.progress() * 100);
                document.getElementById('percentage').innerText = progress + "%";
            }
        })
        .to("#logo", {
            duration: 1,
            scale: 1.2,
            rotation: 360,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true
        }, 0)
        .to(".decoration1", {
            duration: 2,
            scale: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        }, 0)
        .to(".decoration2", {
            duration: 2.5,
            scale: 1.8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        }, 0.2)
        .to(".decoration3", {
            duration: 2.2,
            scale: 1.6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        }, 0.1)
        .to("#loading-screen", {
            duration: 1,
            opacity: 0,
            delay: 0.5,
            onComplete: function () {
                document.getElementById('loading-screen').style.display = 'none';
                gsap.to("#content", {
                    duration: 1,
                    opacity: 1,
                    ease: "power2.out"
                });
                // Simpan status ke localStorage agar tidak tampil lagi
                localStorage.setItem("loadingScreenShown", "true");
            }
        });
} else {
    // Langsung sembunyikan loading screen dan tampilkan konten
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('content').style.opacity = 1;
}
