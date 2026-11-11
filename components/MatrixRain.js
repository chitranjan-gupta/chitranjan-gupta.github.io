'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';

/**
 * Matrix Rain Canvas Background
 * Cascading digital green/red/cyan/amber characters falling down the screen
 * Adaptive to the active hacker color theme:
 * - redteam: Crimson red digital rain & binary
 * - blackhat: Authentic phosphorescent Matrix green katakana + alphanumeric
 * - kali: Electric cyan / cobalt cyber stream
 * - c2amber: Amber CRT terminal stream
 * - purpleteam: Neon purple / violet glyph stream
 */

export default function MatrixRain() {
    const { design, theme } = useTheme();
    const canvasRef = useRef(null);

    useEffect(() => {
        if (design !== 'hacker') return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            columns = Math.floor(width / fontSize);
            drops = [];
            for (let i = 0; i < columns; i++) {
                drops[i] = Math.floor(Math.random() * -100);
            }
        };
        window.addEventListener('resize', handleResize);

        // Matrix character set (Authentic Japanese Katakana, hex opcodes, and binary)
        const characters = 'ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ0123456789ABCDEF!@#$%&*+=-~<>[]{}|/:;';
        const fontSize = 14;
        let columns = Math.floor(width / fontSize);
        let drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.floor(Math.random() * -100);
        }

        // Color theme mappings
        const getColors = () => {
            switch (theme) {
                case 'redteam':
                    return {
                        head: '#FFFFFF',
                        lead: '#FF4D6D',
                        tail: '#990011',
                        bgFade: 'rgba(11, 2, 4, 0.08)'
                    };
                case 'kali':
                    return {
                        head: '#FFFFFF',
                        lead: '#00D2FF',
                        tail: '#00558F',
                        bgFade: 'rgba(3, 9, 20, 0.08)'
                    };
                case 'c2amber':
                    return {
                        head: '#FFFFFF',
                        lead: '#FFB000',
                        tail: '#8C4B00',
                        bgFade: 'rgba(10, 7, 1, 0.08)'
                    };
                case 'purpleteam':
                    return {
                        head: '#FFFFFF',
                        lead: '#A855F7',
                        tail: '#581C87',
                        bgFade: 'rgba(8, 3, 17, 0.08)'
                    };
                default: // blackhat matrix green
                    return {
                        head: '#FFFFFF',
                        lead: '#00FF41',
                        tail: '#003B00',
                        bgFade: 'rgba(3, 8, 4, 0.08)'
                    };
            }
        };

        let lastTime = 0;
        const fps = 33; // ~30 fps for authentic retro terminal feel and peak efficiency
        const interval = 1000 / fps;

        const render = (currentTime) => {
            animationFrameId = requestAnimationFrame(render);

            const delta = currentTime - lastTime;
            if (delta < interval) return;
            lastTime = currentTime - (delta % interval);

            const colors = getColors();

            // Translucent fade over canvas to produce trails
            ctx.fillStyle = colors.bgFade;
            ctx.fillRect(0, 0, width, height);

            ctx.font = `${fontSize}px 'JetBrains Mono', 'Fira Code', monospace`;

            for (let i = 0; i < drops.length; i++) {
                // Pick random glyph
                const char = characters.charAt(Math.floor(Math.random() * characters.length));
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                if (y > 0 && y < height + fontSize) {
                    // Head of the drop is white
                    ctx.fillStyle = colors.head;
                    ctx.fillText(char, x, y);

                    // Slightly dimmer lead
                    ctx.fillStyle = colors.lead;
                    ctx.fillText(char, x, y - fontSize);
                }

                // If drop falls below viewport, reset randomly
                if (y > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        // Initial clear to background
        const initialColors = getColors();
        ctx.fillStyle = initialColors.bgFade.replace('0.08', '1');
        ctx.fillRect(0, 0, width, height);

        animationFrameId = requestAnimationFrame(render);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, [design, theme]);

    if (design !== 'hacker') return null;

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 w-screen h-screen opacity-40 mix-blend-screen"
            title="Matrix Cyber Rain"
        />
    );
}
