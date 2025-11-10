// Product data
        const products = [
            {
                id: 1,
                name: "Lavender Dreams",
                subtitle: "Calming lavender fields",
                price: "Rs280",
                description: "Our Lavender Dreams candle combines pure lavender essential oil with subtle notes of vanilla and amber. Hand-poured in small batches using natural soy wax. Burns for approximately 50 hours.",
                image: "./images/img1.jpg"
            },
            {
                id: 2,
                name: "Vanilla Sky",
                subtitle: "Creamy vanilla bliss",
                price: "Rs320",
                description: "Indulge in the warm, comforting scent of Madagascar vanilla beans blended with creamy coconut and a hint of caramel. This slow-burning candle (60+ hours) creates an inviting atmosphere in any room.",
                image: "./images/img2.jpg"
            },
            {
                id: 3,
                name: "Citrus Bloom",
                subtitle: "Fresh citrus awakening",
                price: "Rs260",
                description: "A refreshing blend of grapefruit, bergamot, and sweet orange essential oils. Perfect for mornings or whenever you need an energizing boost. Burns cleanly for 45 hours.",
                image: "./images/img3.jpg"
            },
            {
                id: 4,
                name: "Sandalwood Serenity",
                subtitle: "Woody earthy tones",
                price: "Rs340",
                description: "Rich sandalwood essential oil blended with warm cedar and a touch of patchouli. This sophisticated scent is our longest-burning candle at 70 hours. Presented in a reusable ceramic vessel.",
                image: "./images/img4.jpg"
            },
            {
                id: 5,
                name: "Rose Petal",
                subtitle: "Romantic floral bouquet",
                price: "Rs300",
                description: "A delicate blend of Bulgarian rose absolute, peony, and a whisper of musk. Our most romantic candle, perfect for creating a luxurious ambiance. Approximately 55 hour burn time.",
                image: "./images/img5.jpg"
            },
            {
                id: 6,
                name: "Ocean Breeze",
                subtitle: "Fresh coastal air",
                price: "Rs280",
                description: "Crisp sea salt, driftwood, and marine air notes create this refreshing oceanic scent. Ideal for bathrooms or spaces where you want a clean, airy feeling. Burns for 50 hours.",
                image: "./images/img6.jpg"
            }
        ];

        // Set current year in footer
        document.getElementById('currentYear').textContent = new Date().getFullYear();

        // Logo Video Intro Functionality
        document.addEventListener('DOMContentLoaded', () => {
            const logoIntro = document.getElementById('logoIntro');
            const logoVideo = document.getElementById('logoVideo');
            const skipIntro = document.getElementById('skipIntro');
            const mainContent = document.getElementById('mainContent');
            
            // Function to show main content and hide intro
            function showMainContent() {
                logoIntro.style.display = 'none';
                mainContent.style.display = 'block';
                document.body.style.overflow = 'auto';
            }
            
            // When video ends, show main content
            logoVideo.addEventListener('ended', showMainContent);
            
            // Skip intro button
            skipIntro.addEventListener('click', showMainContent);
            
            // If video fails to load, show main content after 3 seconds
            setTimeout(() => {
                if (logoIntro.style.display !== 'none') {
                    showMainContent();
                }
            }, 3000);
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('mainNavbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Modal functionality
        document.addEventListener('DOMContentLoaded', () => {
            const modal = new bootstrap.Modal(document.getElementById('productModal'));
            const viewButtons = document.querySelectorAll('.view-details');
            
            viewButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const productId = parseInt(button.getAttribute('data-id'));
                    const product = products.find(p => p.id === productId);
                    
                    if (product) {
                        document.getElementById('modalImage').style.backgroundImage = `url('${product.image}')`;
                        document.getElementById('modalTitle').textContent = product.name;
                        document.getElementById('modalSubtitle').textContent = product.subtitle;
                        document.getElementById('modalPrice').textContent = product.price;
                        document.getElementById('modalDescription').textContent = product.description;
                        
                        modal.show();
                    }
                });
            });
            
            // Prevent carousel from pausing on hover
            const carousel = document.getElementById('heroCarousel');
            if (carousel) {
                // Disable the default hover pause behavior
                const bsCarousel = new bootstrap.Carousel(carousel, {
                    pause: false
                });
            }
        });
