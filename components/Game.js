'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useTheme, DESIGN_THEMES } from '@/context/ThemeContext';

const GRID_SIZE = 20;
const INITIAL_SNAKE = [
    { x: 10, y: 10 },
    { x: 10, y: 11 },
    { x: 10, y: 12 },
];
const INITIAL_DIRECTION = { x: 0, y: -1 };

const TECH_ITEMS = [
    { label: 'React', color: '#61dafb' },
    { label: 'Next.js', color: '#ffffff' },
    { label: 'TypeScript', color: '#3178c6' },
    { label: 'Node.js', color: '#68a063' },
    { label: 'MongoDB', color: '#47a248' },
    { label: 'Redis', color: '#dc382d' },
    { label: 'AWS', color: '#ff9900' },
    { label: 'Docker', color: '#2496ed' },
];

export default function Game() {
    const { design, setDesign, setTheme, theme, designs, availableThemes } = useTheme();
    const [snake, setSnake] = useState(INITIAL_SNAKE);
    const [direction, setDirection] = useState(INITIAL_DIRECTION);
    const [food, setFood] = useState({ x: 5, y: 5, tech: TECH_ITEMS[0] });
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [collectedStack, setCollectedStack] = useState([]);
    const [bannerEffect, setBannerEffect] = useState(null);

    const directionRef = useRef(direction);
    const foodRef = useRef(food);
    const designRef = useRef(design);
    const themeRef = useRef(theme);

    useEffect(() => {
        directionRef.current = direction;
        foodRef.current = food;
        designRef.current = design;
        themeRef.current = theme;
    }, [direction, food, design, theme]);

    const gameContainerRef = useRef(null);

    // Load High Score
    useEffect(() => {
        const timer = setTimeout(() => {
            const saved = localStorage.getItem('portfolio-game-highscore');
            if (saved) setHighScore(parseInt(saved, 10));
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    // Random food generator
    const generateFood = useCallback((currentSnake) => {
        let newX, newY;
        let collision;
        do {
            newX = Math.floor(Math.random() * GRID_SIZE);
            newY = Math.floor(Math.random() * GRID_SIZE);
            collision = currentSnake.some((seg) => seg.x === newX && seg.y === newY);
        } while (collision);

        const randomTech = TECH_ITEMS[Math.floor(Math.random() * TECH_ITEMS.length)];
        return { x: newX, y: newY, tech: randomTech };
    }, []);

    // Restart game
    const startGame = () => {
        setSnake(INITIAL_SNAKE);
        setDirection(INITIAL_DIRECTION);
        directionRef.current = INITIAL_DIRECTION;
        const initialFood = generateFood(INITIAL_SNAKE);
        foodRef.current = initialFood;
        setFood(initialFood);
        setScore(0);
        setGameOver(false);
        setIsPlaying(true);
        setCollectedStack([]);
    };

    // Game Loop
    useEffect(() => {
        if (!isPlaying || gameOver) return;

        const interval = setInterval(() => {
            setSnake((prevSnake) => {
                const head = prevSnake[0];
                const dir = directionRef.current;
                const newHead = { x: head.x + dir.x, y: head.y + dir.y };

                // Collision with wall
                if (
                    newHead.x < 0 ||
                    newHead.x >= GRID_SIZE ||
                    newHead.y < 0 ||
                    newHead.y >= GRID_SIZE
                ) {
                    setGameOver(true);
                    setIsPlaying(false);
                    return prevSnake;
                }

                // Collision with self
                if (prevSnake.some((seg) => seg.x === newHead.x && seg.y === newHead.y)) {
                    setGameOver(true);
                    setIsPlaying(false);
                    return prevSnake;
                }

                const newSnake = [newHead, ...prevSnake];

                let ateFood = false;

                // Check Food Collision
                const currentFood = foodRef.current;
                if (newHead.x === currentFood.x && newHead.y === currentFood.y) {
                    ateFood = true;
                    setScore((s) => {
                        const newScore = s + 10;
                        if (newScore > highScore) {
                            setHighScore(newScore);
                            localStorage.setItem('portfolio-game-highscore', newScore.toString());
                        }
                        return newScore;
                    });

                    setCollectedStack((prev) => [currentFood.tech.label, ...prev.slice(0, 5)]);
                    const nextFood = generateFood(newSnake);
                    foodRef.current = nextFood;
                    setFood(nextFood);
                } else {
                    newSnake.pop();
                }

                // If food was eaten, schedule theme/design shift asynchronously outside state reducer
                if (ateFood && designs && designs.length > 0) {
                    const allPairs = [];
                    designs.forEach((d) => {
                        const palettes = (typeof DESIGN_THEMES !== 'undefined' ? DESIGN_THEMES[d.id] : null) || [];
                        if (palettes.length > 0) {
                            palettes.forEach((p) => allPairs.push({ design: d, theme: p }));
                        } else {
                            allPairs.push({ design: d, theme: { id: d.id, label: d.label } });
                        }
                    });

                    const currentIdx = allPairs.findIndex(
                        (pair) => pair.design.id === designRef.current && pair.theme.id === themeRef.current
                    );
                    const nextPair = allPairs[(currentIdx + 1) % allPairs.length];

                    const gameElem = gameContainerRef.current;
                    const initialTop = gameElem ? gameElem.getBoundingClientRect().top : null;

                    queueMicrotask(() => {
                        setDesign(nextPair.design.id, nextPair.theme.id);
                        setBannerEffect(`${nextPair.design.label} • ${nextPair.theme.label} ${nextPair.design.icon}`);
                        setTimeout(() => setBannerEffect(null), 1800);

                        if (gameElem && initialTop !== null) {
                            const stabilize = (framesLeft) => {
                                const newTop = gameElem.getBoundingClientRect().top;
                                const diff = newTop - initialTop;
                                if (Math.abs(diff) > 1) {
                                    window.scrollBy({ top: diff, behavior: 'instant' });
                                }
                                if (framesLeft > 0) {
                                    requestAnimationFrame(() => stabilize(framesLeft - 1));
                                }
                            };
                            requestAnimationFrame(() => stabilize(3));
                        }
                    });
                }

                return newSnake;
            });
        }, 120);

        return () => clearInterval(interval);
    }, [isPlaying, gameOver, generateFood, highScore, designs, setDesign]);

    // Keyboard handlers
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isPlaying) return;

            // Prevent page scroll with arrow keys
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
                e.preventDefault();
            }

            const dir = directionRef.current;
            switch (e.key) {
                case 'ArrowUp':
                case 'w':
                case 'W':
                    if (dir.y === 0) setDirection({ x: 0, y: -1 });
                    break;
                case 'ArrowDown':
                case 's':
                case 'S':
                    if (dir.y === 0) setDirection({ x: 0, y: 1 });
                    break;
                case 'ArrowLeft':
                case 'a':
                case 'A':
                    if (dir.x === 0) setDirection({ x: -1, y: 0 });
                    break;
                case 'ArrowRight':
                case 'd':
                case 'D':
                    if (dir.x === 0) setDirection({ x: 1, y: 0 });
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isPlaying]);

    return (
        <section id="game" ref={gameContainerRef} className="py-24 md:py-36 relative overflow-hidden">
            <div className="w-[min(1200px,92vw)] mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.8rem] font-bold tracking-wider uppercase mb-3 border border-[var(--border)] bg-[var(--bg-card)]">
                        <span>🎮</span> Mini-Game Break
                    </div>
                    <h2 className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-extrabold tracking-tight mb-4">
                        Eat The <span className="text-[var(--accent-1)]">Tech Stack</span>
                    </h2>
                    <p className="text-[1.05rem] text-[var(--text-secondary)] max-w-[550px] mx-auto font-medium">
                        Guide the developer snake to collect frameworks and cloud tools. Use Arrow Keys or WASD to navigate!
                    </p>
                </div>

                {/* Main Interactive Game Shell */}
                <div className="max-w-[750px] mx-auto p-6 md:p-8 rounded-[28px] border border-[var(--border)] bg-[var(--bg-card)] backdrop-blur-2xl shadow-2xl relative">
                    {/* Top Stats Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-[var(--border)] font-mono">
                        <div className="flex items-center gap-6">
                            <div>
                                <span className="text-[0.7rem] uppercase tracking-wider text-[var(--text-muted)] block">SCORE</span>
                                <span className="text-[1.8rem] font-black text-[var(--text-primary)]">{score}</span>
                            </div>
                            <div>
                                <span className="text-[0.7rem] uppercase tracking-wider text-[var(--text-muted)] block">BEST</span>
                                <span className="text-[1.8rem] font-black text-[var(--accent-1)]">{highScore}</span>
                            </div>
                        </div>

                        {/* Recent Stacks Eaten */}
                        <div className="hidden sm:flex items-center gap-2">
                            <span className="text-[0.7rem] uppercase tracking-wider text-[var(--text-muted)] mr-1">STACK:</span>
                            {collectedStack.length > 0 ? (
                                collectedStack.map((tech, idx) => (
                                    <span key={idx} className="px-2 py-0.5 rounded text-[0.7rem] font-bold bg-[var(--accent-1)]/15 text-[var(--accent-1)] border border-[var(--accent-1)]/30">
                                        {tech}
                                    </span>
                                ))
                            ) : (
                                <span className="text-[0.75rem] text-[var(--text-muted)] italic">Feed me tech...</span>
                            )}
                        </div>
                    </div>

                    {/* Canvas Grid Board */}
                    <div
                        className="relative w-full aspect-square max-w-[500px] mx-auto rounded-2xl overflow-hidden border border-[var(--border)] bg-black/60 shadow-inner grid"
                        style={{
                            gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                            gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
                        }}
                    >
                        {/* Dynamic Floating Shift Notification */}
                        {bannerEffect && (
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none px-4 py-1.5 rounded-full bg-[var(--accent-1)] text-black font-extrabold text-[0.8rem] shadow-2xl tracking-wide uppercase animate-bounce whitespace-nowrap">
                                ⚡ {bannerEffect}
                            </div>
                        )}

                        {/* Overlay: Start or Game Over */}
                        {!isPlaying && (
                            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/75 backdrop-blur-md p-6 text-center">
                                {gameOver ? (
                                    <>
                                        <div className="text-[2.5rem] mb-2">💥</div>
                                        <h3 className="text-[1.8rem] font-extrabold text-red-500 mb-1 tracking-tight">System Crash!</h3>
                                        <p className="text-[0.95rem] text-[var(--text-secondary)] mb-6 font-mono">
                                            Final Score: <strong className="text-white">{score}</strong>
                                        </p>
                                        <button
                                            onClick={startGame}
                                            className="px-7 py-3 rounded-full font-bold text-[0.9rem] bg-[var(--accent-1)] text-black dark:text-white hover:brightness-110 transition-all shadow-lg hover:scale-105"
                                        >
                                            Try Again
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <div className="text-[3rem] mb-3">⚡</div>
                                        <h3 className="text-[1.6rem] font-bold text-white mb-2 tracking-tight">Ready to Compile?</h3>
                                        <p className="text-[0.9rem] text-[var(--text-secondary)] max-w-[280px] mb-6">
                                            Eat frameworks to grow your stack. Don&apos;t hit the boundary walls!
                                        </p>
                                        <button
                                            onClick={startGame}
                                            className="px-8 py-3.5 rounded-full font-extrabold text-[0.95rem] bg-[var(--accent-1)] text-black dark:text-white hover:brightness-110 transition-all shadow-xl hover:scale-105"
                                        >
                                            Start Game
                                        </button>
                                    </>
                                )}
                            </div>
                        )}

                        {/* Render Snake Segments */}
                        {snake.map((segment, index) => {
                            const isHead = index === 0;
                            return (
                                <div
                                    key={index}
                                    className="rounded-sm transition-all"
                                    style={{
                                        gridColumnStart: segment.x + 1,
                                        gridRowStart: segment.y + 1,
                                        backgroundColor: isHead ? 'var(--accent-1)' : 'var(--accent-2, var(--accent-1))',
                                        opacity: isHead ? 1 : Math.max(0.35, 1 - index * 0.05),
                                        borderRadius: isHead ? '4px' : '2px',
                                        boxShadow: isHead ? '0 0 10px var(--accent-1)' : 'none',
                                    }}
                                />
                            );
                        })}

                        {/* Render Tech Food Item */}
                        {isPlaying && (
                            <div
                                className="flex items-center justify-center font-bold text-[0.65rem] animate-pulse"
                                style={{
                                    gridColumnStart: food.x + 1,
                                    gridRowStart: food.y + 1,
                                    backgroundColor: food.tech.color,
                                    borderRadius: '50%',
                                    boxShadow: `0 0 12px ${food.tech.color}`,
                                    color: '#000',
                                }}
                                title={food.tech.label}
                            >
                                •
                            </div>
                        )}
                    </div>

                    {/* Mobile On-Screen Controls */}
                    <div className="mt-6 pt-6 border-t border-[var(--border)] flex flex-col items-center sm:hidden">
                        <div className="grid grid-cols-3 gap-2 w-[180px]">
                            <div />
                            <button
                                onClick={() => directionRef.current.y === 0 && setDirection({ x: 0, y: -1 })}
                                className="w-12 h-12 rounded-xl bg-[var(--border)] flex items-center justify-center font-bold text-lg active:scale-95"
                            >
                                ▲
                            </button>
                            <div />
                            <button
                                onClick={() => directionRef.current.x === 0 && setDirection({ x: -1, y: 0 })}
                                className="w-12 h-12 rounded-xl bg-[var(--border)] flex items-center justify-center font-bold text-lg active:scale-95"
                            >
                                ◀
                            </button>
                            <button
                                onClick={() => directionRef.current.y === 0 && setDirection({ x: 0, y: 1 })}
                                className="w-12 h-12 rounded-xl bg-[var(--border)] flex items-center justify-center font-bold text-lg active:scale-95"
                            >
                                ▼
                            </button>
                            <button
                                onClick={() => directionRef.current.x === 0 && setDirection({ x: 1, y: 0 })}
                                className="w-12 h-12 rounded-xl bg-[var(--border)] flex items-center justify-center font-bold text-lg active:scale-95"
                            >
                                ▶
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
