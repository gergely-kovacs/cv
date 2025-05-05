import { A } from '@solidjs/router';
import DarkModeToggler from './DarkModeToggler';

function NavHeader() {
    return (
        <div class="flex print:hidden">
            <A
                class="inline-flex items-center border-b border-gray-300 px-4 py-2 text-sm no-underline visited:text-sky-600 hover:border-gray-400 sm:text-base dark:border-gray-500 dark:visited:text-indigo-300 dark:hover:border-gray-300"
                activeClass="border border-b-0 rounded-t-md"
                href="/"
                end={true}
            >
                Summary
            </A>

            <A
                class="inline-flex items-center border-b border-gray-300 px-4 py-2 text-sm no-underline visited:text-sky-600 hover:border-gray-400 sm:text-base dark:border-gray-500 dark:visited:text-indigo-300 dark:hover:border-gray-300"
                activeClass="border border-b-0 rounded-t-md"
                href="/details"
                end={true}
            >
                Details
            </A>

            <div class="flex flex-1 justify-end border-b border-gray-300 dark:border-gray-500">
                <DarkModeToggler />
            </div>
        </div>
    );
}

export default NavHeader;
