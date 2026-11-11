'use client';

import { createContext, useContext, useEffect, useState } from 'react';

/* ════════════════════════════════════════════════════════════════
   DESIGN SYSTEMS
════════════════════════════════════════════════════════════════ */
export const DESIGNS = [
    { id: 'aurora', label: 'Aurora', desc: 'Glassmorphism', icon: '✦' },
    { id: 'tron', label: 'Tron', desc: 'Cyberpunk', icon: '⬡' },
    { id: 'ares', label: 'Ares', desc: 'Brutalist', icon: '◼' },
    { id: 'cod', label: 'Warfare', desc: 'Tactical', icon: '⊕' },
    { id: 'modern', label: 'Modern', desc: 'Sleek/Web', icon: '▲' },
    { id: 'indic', label: 'Indic', desc: 'Traditional', icon: '𑁍' },
    { id: 'apple', label: 'Cupertino', desc: 'Apple UI', icon: '' },
    { id: 'hacker', label: 'CyberSec', desc: 'Red Team / Ops', icon: '☠' },
];

/* ════════════════════════════════════════════════════════════════
   PER-DESIGN COLOUR PALETTES
════════════════════════════════════════════════════════════════ */
export const DESIGN_THEMES = {
    hacker: [
        { id: 'redteam', label: 'Red Team Ops', accent: '#FF0033', secondary: '#990011', icon: '🩸' },
        { id: 'blackhat', label: 'Black Hat ZeroDay', accent: '#00FF41', secondary: '#0D0208', icon: '☠' },
        { id: 'kali', label: 'Kali Linux Blue', accent: '#00D2FF', secondary: '#1D2671', icon: '🐉' },
        { id: 'c2amber', label: 'C2 Command Amber', accent: '#FFB000', secondary: '#78350F', icon: '☣' },
        { id: 'purpleteam', label: 'Purple Team Fusion', accent: '#A855F7', secondary: '#EC4899', icon: '👾' },
    ],
    aurora: [
        { id: 'cosmic', label: 'Cosmic', accent: '#6366f1', secondary: '#06b6d4' },
        { id: 'rose', label: 'Midnight Rose', accent: '#ec4899', secondary: '#f43f5e' },
        { id: 'emerald', label: 'Emerald', accent: '#10b981', secondary: '#06b6d4' },
        { id: 'aurora-lavender', label: 'Lavender Mist', accent: '#a78bfa', secondary: '#c084fc' },
        { id: 'aurora-peach', label: 'Peach Glow', accent: '#fb7185', secondary: '#fbbf24' },
    ],
    tron: [
        { id: 'tron-cyan', label: 'Neon Cyan', accent: '#06b6d4', secondary: '#22d3ee' },
        { id: 'tron-magenta', label: 'Hot Magenta', accent: '#e879f9', secondary: '#f0abfc' },
        { id: 'tron-green', label: 'Matrix Green', accent: '#22c55e', secondary: '#4ade80' },
        { id: 'tron-red', label: 'Red Alert', accent: '#ef4444', secondary: '#f87171' },
        { id: 'tron-orange', label: 'Neon Orange', accent: '#f97316', secondary: '#fb923c' },
    ],
    ares: [
        { id: 'ares-white', label: 'Bone White', accent: '#e2e8f0', secondary: '#f8fafc' },
        { id: 'ares-red', label: 'Blood Red', accent: '#dc2626', secondary: '#ef4444' },
        { id: 'ares-yellow', label: 'Caution Yellow', accent: '#eab308', secondary: '#facc15' },
        { id: 'ares-blue', label: 'Industrial Blue', accent: '#2563eb', secondary: '#3b82f6' },
        { id: 'ares-green', label: 'Acid Green', accent: '#84cc16', secondary: '#a3e635' },
    ],
    cod: [
        { id: 'cod-olive', label: 'Olive Drab', accent: '#84cc16', secondary: '#a3e635' },
        { id: 'cod-sand', label: 'Desert Sand', accent: '#d4a574', secondary: '#e8c89e' },
        { id: 'cod-grey', label: 'Gunmetal', accent: '#6b7280', secondary: '#9ca3af' },
        { id: 'cod-red', label: 'Blood Patch', accent: '#b91c1c', secondary: '#dc2626' },
        { id: 'cod-amber', label: 'Amber Alert', accent: '#d97706', secondary: '#f59e0b' },
    ],
    modern: [
        { id: 'next-light', label: 'Clean', accent: '#000000', secondary: '#666666' },
        { id: 'next-dark', label: 'Ebony', accent: '#ffffff', secondary: '#444444' }
    ],
    indic: [
        { id: 'chhath', label: 'छठ पूजा (Chhath Puja)', accent: '#C2410C', secondary: '#1D4F7A', icon: '☀️' },
        { id: 'diwali', label: 'दीपावली (Diwali)', accent: '#FF9933', secondary: '#FFD700', icon: '🪔' },
        { id: 'holi', label: 'होली (Holi)', accent: '#FF1493', secondary: '#00E5FF', icon: '🎨' },
        { id: 'dussehra', label: 'दशहरा (Dussehra)', accent: '#FF4500', secondary: '#FFD700', icon: '🏹' },
        { id: 'raksha-bandhan', label: 'रक्षाबंधन (Raksha Bandhan)', accent: '#D81B60', secondary: '#FFD700', icon: '🧵' },
        { id: 'heritage', label: 'Heritage', accent: '#FF9933', secondary: '#E2725B', icon: '𑁍' },
        { id: 'lotus', label: 'Lotus Night', accent: '#FFD700', secondary: '#00416A', icon: '🪷' },
    ],
    apple: [
        { id: 'apple-dark', label: 'Space Black', accent: '#2997ff', secondary: '#f5f5f7' },
        { id: 'apple-intelligence', label: 'Siri Glow', accent: '#ff375f', secondary: '#bf5af2' },
        { id: 'apple-titanium', label: 'Natural Titanium', accent: '#9a9489', secondary: '#e5e5ea' },
        { id: 'apple-light', label: 'Silver White', accent: '#0071e3', secondary: '#1d1d1f' }
    ],
};

// Legacy flat list for backward-compat (union of all)
export const THEMES = Object.values(DESIGN_THEMES).flat();

const ThemeContext = createContext({
    theme: 'cosmic',
    setTheme: () => { },
    design: 'aurora',
    setDesign: () => { },
    availableThemes: DESIGN_THEMES.aurora,
});

export function ThemeProvider({ children }) {
    const [theme, setThemeState] = useState('cosmic');
    const [design, setDesignState] = useState('aurora');
    const [mounted, setMounted] = useState(false);

    // Initial load from localStorage
    useEffect(() => {
        const timer = setTimeout(() => {
            const savedDesign = localStorage.getItem('portfolio-design') || 'aurora';
            const rawTheme = localStorage.getItem('portfolio-theme');

            let savedTheme = rawTheme || getDefaultTheme(savedDesign);

            // Validate theme belongs to design
            const palette = DESIGN_THEMES[savedDesign] || DESIGN_THEMES.aurora;
            const isValid = palette.some(t => t.id === savedTheme);
            if (!isValid) savedTheme = palette[0].id;

            setDesignState(savedDesign);
            setThemeState(savedTheme);
            setMounted(true);
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    // Sync attributes to document whenever theme/design changes
    useEffect(() => {
        if (!mounted) return;
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.setAttribute('data-design', design);
        localStorage.setItem('portfolio-theme', theme);
        localStorage.setItem('portfolio-design', design);
    }, [theme, design, mounted]);

    const setTheme = (id) => {
        setThemeState(id);
    };

    const setDesign = (id, specificThemeId = null) => {
        setDesignState(id);
        const palette = DESIGN_THEMES[id] || DESIGN_THEMES.aurora;
        setThemeState((prev) => {
            if (specificThemeId && palette.some(t => t.id === specificThemeId)) {
                return specificThemeId;
            }
            const isAvailable = palette.some((t) => t.id === prev);
            return isAvailable ? prev : palette[0].id;
        });
    };

    const availableThemes = DESIGN_THEMES[design] || DESIGN_THEMES.aurora;

    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme,
            design,
            setDesign,
            themes: availableThemes,
            availableThemes,
            designs: DESIGNS,
            mounted
        }}>
            <div style={{ visibility: mounted ? 'visible' : 'hidden' }}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

function getDefaultTheme(designId) {
    const palette = DESIGN_THEMES[designId];
    return palette ? palette[0].id : 'cosmic';
}

export function useTheme() {
    return useContext(ThemeContext);
}
