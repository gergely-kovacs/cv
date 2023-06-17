import DarkModeToggler from './DarkModeToggler';

function NavHeader() {
    return (
        <div class="flex">
            {/* TODO: add path for summary / details */}
            <div class="ml-auto">
                <DarkModeToggler />
            </div>
        </div>
    );
}

export default NavHeader;
