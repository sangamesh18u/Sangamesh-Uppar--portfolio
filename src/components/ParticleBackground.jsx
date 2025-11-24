import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Get theme color
        const getThemeColor = () => {
            const style = getComputedStyle(document.documentElement);
            return style.getPropertyValue('--accent-color').trim() || '#007bff';
        };

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5; // Tiny dots (0.5px to 2.5px)
                this.speedX = Math.random() * 0.4 - 0.2; // Slow organic drift
                this.speedY = Math.random() * 0.4 - 0.2;
                this.opacity = Math.random() * 0.5 + 0.1; // Varying initial opacity
                this.opacitySpeed = Math.random() * 0.005 + 0.002; // Slow fade speed
                this.opacityDirection = Math.random() > 0.5 ? 1 : -1;
                this.color = getThemeColor();
            }

            update(mouse) {
                // Organic movement
                this.x += this.speedX;
                this.y += this.speedY;

                // Opacity oscillation (fading in and out)
                this.opacity += this.opacitySpeed * this.opacityDirection;
                if (this.opacity >= 0.6 || this.opacity <= 0.1) {
                    this.opacityDirection *= -1;
                }

                // Wrap around screen for continuous flow
                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;

                // Subtle mouse interaction (gentle avoidance)
                if (mouse.x != null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const maxDistance = 120;

                    if (distance < maxDistance) {
                        const force = (maxDistance - distance) / maxDistance;
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;

                        // Very subtle push
                        this.x -= forceDirectionX * force * 0.8;
                        this.y -= forceDirectionY * force * 0.8;
                    }
                }
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.globalAlpha = Math.max(0, Math.min(1, this.opacity)); // Clamp opacity
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1; // Reset global alpha
            }
        }

        const init = () => {
            particles = [];
            const numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000); // Responsive density
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        const mouse = { x: null, y: null };

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        window.addEventListener('mouseout', () => {
            mouse.x = null;
            mouse.y = null;
        });

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle) => {
                particle.update(mouse);
                particle.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
            }}
        />
    );
};

export default ParticleBackground;
