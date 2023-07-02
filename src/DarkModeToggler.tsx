import { createEffect } from 'solid-js';

export type ThemeOption = 'dark' | 'light';

function DarkModeToggler() {
    const STORAGE_KEY = 'theme';

    // FIXME: create signal for theme
    // https://www.solidjs.com/tutorial/introduction_effects
    let theme: ThemeOption = 'dark';

    function getColorPreference(): ThemeOption {
        if (!localStorage.getItem(STORAGE_KEY)) {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }

        const themeFromStorage = localStorage.getItem(STORAGE_KEY);
        if (themeFromStorage === 'dark' || themeFromStorage === 'light') {
            return themeFromStorage;
        }

        console.error(`Invalid theme preference: ${themeFromStorage}`);
        return 'dark';
    }

    function setColorPreference(theme: ThemeOption) {
        document.querySelector('html')?.classList.toggle('dark', theme === 'dark');
        localStorage.setItem(STORAGE_KEY, theme);
    }

    function toggleDarkMode() {
        theme = theme === 'dark' ? 'light' : 'dark';
        setColorPreference(theme);
    }

    createEffect(() => {
        theme = getColorPreference();
        setColorPreference(theme);
    });

    // FIXME: colour the icons
    return (
        <div class="mx-4 print:hidden">
            <button type="button" title="Toggle dark mode" aria-hidden="true" onClick={toggleDarkMode}>
                {theme === 'dark' ? (
                    <img class="h-6 w-6" src="/src/assets/icons/moon.svg" alt="dark mode" />
                ) : (
                    <img class="h-6 w-6" src="/src/assets/icons/sun.svg" alt="light mode" />
                )}
            </button>
        </div>
    );
}

export default DarkModeToggler;
