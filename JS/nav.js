            const menuBtn = document.getElementById('menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const closeBtn = document.getElementById('close-btn');
            const backdrop = document.getElementById('backdrop');
        
            function toggleMenu() {
                mobileMenu.classList.toggle('translate-x-full');
                backdrop.classList.toggle('hidden');
                document.body.classList.toggle('no-scroll');
            }
        
            // Toggle menu
            menuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleMenu();
            });
        
            // Close menu
            closeBtn.addEventListener('click', toggleMenu);
            backdrop.addEventListener('click', toggleMenu);
        
            // Close saat klik di luar menu
            document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('translate-x-full');
                backdrop.classList.add('hidden');
                document.body.classList.remove('no-scroll');
            }
        });
        
        
            // Close saat resize ke desktop
            window.addEventListener('resize', () => {
                if (window.innerWidth >= 768) {
                    mobileMenu.classList.add('translate-x-full');
                    backdrop.classList.add('hidden');
                    document.body.classList.remove('no-scroll');
                }
            });
