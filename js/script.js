// Scroll suave para links âncora
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Efeito de scroll no header
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Efeito de digitação no título
        const heroTitle = document.querySelector('.hero-title:nth-of-type(2)');
        const text = "Desenvolvedor Web";
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Inicia o efeito de digitação após 1 segundo
        setTimeout(() => {
            heroTitle.textContent = "";
            typeWriter();
        }, 1000);