export function initThemeToggle() {
    const stored = localStorage.getItem('aunea-theme') || 'light';

    document.documentElement.setAttribute('data-theme', stored);

    return function toggleTheme() {
        const current =
            document.documentElement.getAttribute('data-theme') || 'light';

        const next = current === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('aunea-theme', next);
    };
}
