import { describe, it, expect } from 'vitest';
import { DESIGNS, DESIGN_THEMES } from '@/context/ThemeContext';

describe('Theme & Design Consistency', () => {
  it('defines 8 core design systems', () => {
    expect(DESIGNS.length).toBe(8);
    const ids = DESIGNS.map(d => d.id);
    expect(ids).toContain('aurora');
    expect(ids).toContain('tron');
    expect(ids).toContain('ares');
    expect(ids).toContain('cod');
    expect(ids).toContain('modern');
    expect(ids).toContain('indic');
    expect(ids).toContain('apple');
    expect(ids).toContain('hacker');
  });

  it('each design has a valid palette with at least one theme', () => {
    DESIGNS.forEach(d => {
      const palette = DESIGN_THEMES[d.id];
      expect(palette).toBeDefined();
      expect(Array.isArray(palette)).toBe(true);
      expect(palette.length).toBeGreaterThan(0);
      palette.forEach(t => {
        expect(t.id).toBeDefined();
        expect(t.label).toBeDefined();
      });
    });
  });
});
