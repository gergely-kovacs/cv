import { createEffect, createSignal } from 'solid-js';
import Moon from './assets/icons/moon.svg';
import Sun from './assets/icons/sun.svg';

export type ThemeOption = 'dark' | 'light';

function DarkModeToggler() {
    const STORAGE_KEY = 'theme';
    const DEFAULT_THEME = 'dark';

    const [theme, setTheme] = createSignal(getColorPreference());

    function getColorPreference(): ThemeOption {
        if (!localStorage.getItem(STORAGE_KEY)) {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }

        const themeFromStorage = localStorage.getItem(STORAGE_KEY);
        if (themeFromStorage === 'dark' || themeFromStorage === 'light') {
            return themeFromStorage;
        }

        console.error(`Invalid theme preference: ${themeFromStorage}`);
        return DEFAULT_THEME;
    }

    function setColorPreference(theme: ThemeOption) {
        document.querySelector('html')?.classList.toggle('dark', theme === 'dark');
        localStorage.setItem(STORAGE_KEY, theme);
    }

    function toggleDarkMode() {
        setTheme(theme() === 'dark' ? 'light' : 'dark');
        setColorPreference(theme());
    }

    createEffect(() => {
        setColorPreference(theme());
    });

    return (
        <div class="mx-4">
            <button type="button" title="Toggle dark mode" aria-hidden="true" onClick={toggleDarkMode}>
                {theme() === 'dark' ? (
                    <div class="h-6 w-6 text-gray-300">
                        <Moon />
                    </div>
                ) : (
                    <div class="h-6 w-6 text-amber-400">
                        <Sun />
                    </div>
                )}
            </button>
        </div>
    );
}

export default DarkModeToggler;
