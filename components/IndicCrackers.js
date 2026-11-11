'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

/**
 * Authentic Festival Music Player & Canvas Celebrations
 * Features real authentic hit Indian songs with lyrics & vocals for each festival:
 * - 🪔 Diwali: "Aayi Hai Diwali Suno Ji Gharwali" (Udit Narayan, Alka Yagnik)
 * - 🎨 Holi: "Rang Barse Bheege Chunarwali" (Amitabh Bachchan - Silsila)
 * - 🏹 Dussehra: "Mangal Bhavan Amangal Hari" (Ram Siya Ram / Ravindra Jain)
 * - ☀️ Chhath Puja: "Ugi He Dinanath / Kaanch Hi Baans Ke Bahangiya" (Sharda Sinha)
 * - 🧵 Raksha Bandhan: "Phoolon Ka Taron Ka Sabka Kehna Hai" (Kishore Kumar)
 */

const FESTIVAL_SONGS = {
    diwali: {
        title: 'Aayi Hai Diwali Suno Ji Gharwali',
        singer: 'Udit Narayan, Alka Yagnik, Kumar Sanu',
        album: 'Aamdani Atthanni Kharcha Rupaiya',
        icon: '🪔',
        youtubeId: 'EHFal8JZexY',
        badge: 'Diwali Hit',
        lyrics: 'आई है दिवाली सुनो जी घरवाली, तेरे कंगना ने दिल धड़काया...'
    },
    holi: {
        title: 'Rang Barse Bheege Chunarwali',
        singer: 'Amitabh Bachchan',
        album: 'Silsila',
        icon: '🎨',
        youtubeId: 'Jf92MOkrbEw',
        badge: 'Holi Classic',
        lyrics: 'रंग बरसे भीगे चुनरवाली रंग बरसे, अरे कीने मारी पिचकारी...'
    },
    dussehra: {
        title: 'Mangal Bhavan Amangal Hari (Ramayan Chaupai)',
        singer: 'Ravindra Jain',
        album: 'Ramcharitmanas',
        icon: '🏹',
        youtubeId: 'cgL61dp8yrY',
        badge: 'Vijayadashami Stuti',
        lyrics: 'मंगल भवन अमंगल हारी, द्रवहु सुदसरथ अजिर बिहारी...'
    },
    chhath: {
        title: 'Ugi He Dinanath (Kaanch Hi Baans)',
        singer: 'Sharda Sinha',
        album: 'Chhath Mahaparv Geet',
        icon: '☀️',
        youtubeId: 'FGQ0SCK1AtE',
        badge: 'Chhath Mahaparv',
        lyrics: 'कांच ही बांस के बहंगिया, बहंगी लचकत जाए... उगी हे दीनानाथ!'
    },
    'raksha-bandhan': {
        title: 'Phoolon Ka Taron Ka Sabka Kehna Hai',
        singer: 'Kishore Kumar',
        album: 'Hare Rama Hare Krishna',
        icon: '🧵',
        youtubeId: 'xpfMlUlEBPU',
        badge: 'Rakhi Special',
        lyrics: 'फूलों का तारों का सबका कहना है, एक हज़ारों में मेरी बहना है...'
    },
    default: {
        title: 'Aayi Hai Diwali Suno Ji Gharwali',
        singer: 'Udit Narayan, Alka Yagnik',
        album: 'Diwali Special',
        icon: '🪔',
        youtubeId: 'EHFal8JZexY',
        badge: 'Festive Hit',
        lyrics: 'शुभ दीपावली, मंगलमय उत्सव!'
    }
};

// Colors
const HOLI_COLORS = ['#FF1493', '#00E5FF', '#FFEB3B', '#76FF03', '#E040FB', '#FF3D00'];
const DIWALI_COLORS = ['#FFD700', '#FF9933', '#FF3D00', '#FFF8E7', '#FF1744'];
const DUSSEHRA_COLORS = ['#FFD700', '#FF6D00', '#D50000', '#FFE082'];
const CHHATH_COLORS = ['#FF9100', '#FFD700', '#FF6D00', '#FFF3E0'];
const RAKHI_COLORS = ['#D81B60', '#FFD700', '#E91E63', '#FFF0F5'];

class Particle {
    constructor(x, y, vx, vy, color, size, life, gravity = 0.05, friction = 0.96) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
        this.size = size;
        this.life = life;
        this.maxLife = life;
        this.gravity = gravity;
        this.friction = friction;
    }

    update() {
        this.vx *= this.friction;
        this.vy *= this.friction;
        this.vy += this.gravity;
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
    }

    draw(ctx) {
        if (this.life <= 0) return;
        const progress = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = Math.max(0, progress);
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.max(0.5, this.size * progress), 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    }
}

// 1. DIWALI ROCKET
class Rocket {
    constructor(x, targetY, width, height, particles) {
        this.x = x || Math.random() * (width * 0.8) + width * 0.1;
        this.y = height + 10;
        this.targetY = targetY || Math.random() * (height * 0.4) + height * 0.15;
        this.speed = Math.random() * 3 + 7;
        this.color = DIWALI_COLORS[Math.floor(Math.random() * DIWALI_COLORS.length)];
        this.trail = [];
        this.done = false;
        this.particles = particles;
    }

    update() {
        this.trail.push({ x: this.x, y: this.y, alpha: 0.8 });
        if (this.trail.length > 5) this.trail.shift();
        this.y -= this.speed;
        if (this.y <= this.targetY) {
            this.done = true;
            this.explode();
        }
    }

    explode() {
        const count = 30;
        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2;
            const speed = Math.random() * 3.5 + 2;
            this.particles.push(new Particle(this.x, this.y, Math.cos(angle) * speed, Math.sin(angle) * speed, this.color, Math.random() * 2.2 + 1, 35));
        }
    }

    draw(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        for (let i = 0; i < this.trail.length; i++) {
            const pt = this.trail[i];
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, (i + 1) * 0.3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 215, 0, ${pt.alpha * 0.5})`;
            ctx.fill();
            pt.alpha *= 0.8;
        }
        ctx.restore();
    }
}

// 2. HOLI GULAL
class HoliSplash {
    constructor(x, y, particles) {
        this.x = x;
        this.y = y;
        this.color = HOLI_COLORS[Math.floor(Math.random() * HOLI_COLORS.length)];
        this.done = true;
        const count = 28;
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 4 + 1.5;
            particles.push(new Particle(this.x, this.y, Math.cos(angle) * speed, Math.sin(angle) * speed, this.color, Math.random() * 4 + 2, 45, 0.04, 0.94));
        }
    }
    update() {}
    draw() {}
}

// 3. DUSSEHRA ARROW
class DussehraArrow {
    constructor(x, y, width, height, particles) {
        this.x = x || Math.random() * (width * 0.3);
        this.y = y || height * 0.7;
        this.vx = 8;
        this.vy = -4.5;
        this.done = false;
        this.life = 60;
        this.width = width;
        this.particles = particles;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        if (Math.random() > 0.4) {
            this.particles.push(new Particle(this.x, this.y, -this.vx * 0.2 + (Math.random() - 0.5), -this.vy * 0.2 + (Math.random() - 0.5), '#FFD700', 1.8, 20, 0.02));
        }
        if (this.life <= 0 || this.x > this.width || this.y < 0) {
            this.done = true;
            for (let i = 0; i < 25; i++) {
                const a = Math.random() * Math.PI * 2;
                const s = Math.random() * 3 + 1;
                this.particles.push(new Particle(this.x, this.y, Math.cos(a) * s, Math.sin(a) * s, DUSSEHRA_COLORS[i % DUSSEHRA_COLORS.length], 2, 30));
            }
        }
    }

    draw(ctx) {
        ctx.save();
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(this.x - 20, this.y + 11);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#FF4500';
        ctx.fill();
        ctx.restore();
    }
}

// 4. CHHATH RAY
class ChhathRay {
    constructor(x, y, width, height, particles) {
        this.x = x || width * 0.5;
        this.y = y || height * 0.3;
        this.radius = 5;
        this.done = false;
        this.life = 50;
        this.particles = particles;
    }

    update() {
        this.radius += 3.5;
        this.life--;
        if (Math.random() > 0.6) {
            const angle = Math.random() * Math.PI * 2;
            this.particles.push(new Particle(this.x + Math.cos(angle) * this.radius, this.y + Math.sin(angle) * this.radius, Math.cos(angle) * 1.5, Math.sin(angle) * 1.5, CHHATH_COLORS[Math.floor(Math.random() * CHHATH_COLORS.length)], 2, 30, -0.01));
        }
        if (this.life <= 0) this.done = true;
    }

    draw(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 179, 0, ${this.life / 50 * 0.4})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();
    }
}

// 5. RAKHI SPARK
class RakhiSpark {
    constructor(x, y, particles) {
        this.x = x;
        this.y = y;
        this.done = true;
        for (let i = 0; i < 20; i++) {
            const angle = (i / 20) * Math.PI * 2;
            const speed = Math.random() * 2.5 + 1;
            particles.push(new Particle(this.x, this.y, Math.cos(angle) * speed, Math.sin(angle) * speed, RAKHI_COLORS[i % RAKHI_COLORS.length], 2.2, 35, 0.02));
        }
    }
    update() {}
    draw() {}
}

export default function IndicCrackers() {
    const { theme } = useTheme();
    const canvasRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPlayerModal, setShowPlayerModal] = useState(false);

    // Only actual festive themes have crackers and music player
    const isFestival = ['diwali', 'holi', 'dussehra', 'chhath', 'raksha-bandhan'].includes(theme);

    const song = isFestival ? FESTIVAL_SONGS[theme] : null;

    // Reset playing state when switching festivals to load new track
    useEffect(() => {
        setIsPlaying(false);
    }, [theme]);

    const triggerActionRef = useRef(null);

    useEffect(() => {
        if (!isFestival) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        let particles = [];
        let specials = [];

        triggerActionRef.current = (cx, cy) => {
            const posX = cx || width * (0.2 + Math.random() * 0.6);
            const posY = cy || height * (0.2 + Math.random() * 0.4);

            if (theme === 'holi') {
                specials.push(new HoliSplash(posX, posY, particles));
            } else if (theme === 'dussehra') {
                specials.push(new DussehraArrow(posX, posY, width, height, particles));
            } else if (theme === 'chhath') {
                specials.push(new ChhathRay(posX, posY, width, height, particles));
            } else if (theme === 'raksha-bandhan') {
                specials.push(new RakhiSpark(posX, posY, particles));
            } else if (theme === 'diwali') {
                if (specials.length < 4) {
                    specials.push(new Rocket(posX, posY, width, height, particles));
                }
            }
        };

        const handlePointerDown = (e) => {
            if (e.target && e.target.closest('button, a, select, input, iframe')) return;
            triggerActionRef.current(e.clientX, e.clientY);
        };

        window.addEventListener('pointerdown', handlePointerDown);

        let frameCount = 0;
        const loop = () => {
            frameCount++;
            ctx.clearRect(0, 0, width, height);

            if (frameCount % 200 === 0 && specials.length < 2) {
                triggerActionRef.current();
            }

            for (let i = specials.length - 1; i >= 0; i--) {
                const s = specials[i];
                s.update();
                s.draw(ctx);
                if (s.done) specials.splice(i, 1);
            }

            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.update();
                p.draw(ctx);
                if (p.life <= 0) particles.splice(i, 1);
            }

            animationFrameId = requestAnimationFrame(loop);
        };

        loop();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('pointerdown', handlePointerDown);
        };
    }, [theme, isFestival]);

    if (!isFestival || !song) return null;

    return (
        <>
            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-[45] w-screen h-screen"
                title={`${song.title} Animation`}
            />

            {/* Embedded Real Music Streamer (Mini-Player Modal) */}
            {isPlaying && (
                <div className="fixed bottom-20 right-6 z-[60] w-72 sm:w-80 rounded-2xl bg-[var(--indic-bg)] border-2 border-[var(--indic-border)] shadow-[0_12px_45px_rgba(0,0,0,0.4)] p-3 text-xs font-serif animate-fade-in backdrop-blur-xl">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-[var(--indic-border)]/30">
                        <div className="flex items-center gap-2">
                            {/* Festival Artwork Thumbnail inside Player */}
                            <div className="w-8 h-8 rounded-lg overflow-hidden border border-[var(--indic-border)] shrink-0 bg-black/10">
                                <img
                                    src={
                                        theme === 'diwali' ? '/assets/festivals/diwali.svg' :
                                        theme === 'holi' ? '/assets/festivals/holi.svg' :
                                        theme === 'dussehra' ? '/assets/festivals/dussehra.svg' :
                                        theme === 'chhath' ? '/assets/festivals/chhath.svg' :
                                        theme === 'raksha-bandhan' ? '/assets/festivals/raksha-bandhan.svg' :
                                        '/assets/festivals/dussehra.svg'
                                    }
                                    alt={song.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="min-w-0">
                                <div className="font-bold text-[var(--indic-fg)] text-[0.8rem] line-clamp-1">{song.title}</div>
                                <div className="text-[0.68rem] text-[var(--indic-terracotta)] line-clamp-1">{song.singer}</div>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsPlaying(false)}
                            className="p-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-text-muted text-sm font-bold"
                            title="Close Player"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Actual Real Song Video & Audio Stream */}
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black mb-2 shadow-inner">
                        <iframe
                            src={`https://www.youtube-nocookie.com/embed/${song.youtubeId}?autoplay=1&enablejsapi=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
                            title={song.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full border-0"
                        />
                    </div>

                    <div className="italic text-[0.7rem] text-center text-text-muted font-sans bg-amber-500/10 rounded-md py-1 px-2 border border-amber-500/20">
                        🎵 {song.lyrics}
                    </div>
                </div>
            )}

            {/* Festive Bottom Controls Bar with Photo & Real Song Controller */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[55] flex items-center gap-2 px-3.5 py-2 rounded-full bg-[rgba(255,249,240,0.95)] dark:bg-[rgba(13,6,20,0.95)] backdrop-blur-xl border border-[var(--indic-border,#D4AF37)] shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all text-xs font-serif">
                {/* Festival photo artwork thumbnail */}
                <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-[var(--indic-border,#D4AF37)] flex-shrink-0 shadow-sm bg-black/10">
                    <img
                        src={
                            theme === 'diwali' ? '/assets/festivals/diwali.svg' :
                            theme === 'holi' ? '/assets/festivals/holi.svg' :
                            theme === 'dussehra' ? '/assets/festivals/dussehra.svg' :
                            theme === 'chhath' ? '/assets/festivals/chhath.svg' :
                            theme === 'raksha-bandhan' ? '/assets/festivals/raksha-bandhan.svg' :
                            '/assets/festivals/diwali.svg'
                        }
                        alt="Festival Icon"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="hidden sm:flex flex-col text-left pl-1 pr-2 border-r border-[var(--indic-border,#D4AF37)]/40">
                    <span className="font-bold text-[var(--indic-fg)] leading-tight text-[0.75rem]">{song.icon} {song.badge}</span>
                    <span className="text-[0.62rem] text-[var(--indic-terracotta)] font-sans line-clamp-1 max-w-[130px]">{song.title}</span>
                </div>

                {/* Festival Interactive Action Button */}
                <button
                    onClick={() => {
                        triggerActionRef.current?.();
                        setTimeout(() => triggerActionRef.current?.(), 200);
                    }}
                    className="px-2.5 py-1 rounded-full bg-[#FF9933]/15 hover:bg-[#FF9933]/30 text-[var(--indic-fg,#2C1810)] dark:text-[#FFD700] font-medium transition flex items-center gap-1"
                    title={`Trigger ${song.badge}`}
                >
                    <span>{song.icon}</span>
                    <span className="hidden xs:inline">Sparkle</span>
                </button>

                {/* Real Song Player Toggle Button */}
                <button
                    onClick={() => setIsPlaying((prev) => !prev)}
                    className={`ml-1 px-3 py-1 rounded-full border transition-all flex items-center gap-1.5 font-sans text-[0.72rem] font-bold ${
                        isPlaying
                            ? 'border-amber-500 bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                            : 'border-amber-500/50 bg-amber-500/20 text-amber-800 dark:text-amber-200 hover:bg-amber-500/30'
                    }`}
                    title={isPlaying ? `Pause: ${song.title}` : `Play real song: ${song.title} (${song.singer})`}
                >
                    <span>{isPlaying ? '⏸' : '▶'}</span>
                    <span>{isPlaying ? 'Playing Song' : 'Play Song'}</span>
                    {isPlaying && (
                        <span className="flex gap-0.5 items-end h-3 ml-0.5">
                            <span className="w-0.5 h-full bg-black animate-bounce" />
                            <span className="w-0.5 h-2/3 bg-black animate-bounce [animation-delay:0.15s]" />
                            <span className="w-0.5 h-4/5 bg-black animate-bounce [animation-delay:0.3s]" />
                        </span>
                    )}
                </button>
            </div>
        </>
    );
}
