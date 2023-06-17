import './DarkModeToggler.css';

function DarkModeToggler() {
    function toggleDarkMode() {
        document.querySelector('html')?.classList.toggle('dark');
    }

    return (
        <div class="print:hidden">
            <label class="switch">
                <input type="checkbox" defaultChecked onClick={toggleDarkMode} />
                <span class="slider round" />
            </label>
        </div>
    );
}

export default DarkModeToggler;
