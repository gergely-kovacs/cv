import { A } from '@solidjs/router'; // 👈 Import the A component
import DarkModeToggler from './DarkModeToggler';

function NavHeader() {
    return (
        <div class="flex">
            {/* TODO: nav link styling, activeClass customization */}
            <div>
                <A href="/" activeClass="underlined">Summary</A>
                <A href="/details" activeClass="underlined">Details</A>
            </div>
            <div class="ml-auto">
                <DarkModeToggler />
            </div>
        </div>
    );
}

export default NavHeader;
