import { A } from '@solidjs/router';
import DarkModeToggler from './DarkModeToggler';

function NavHeader() {
    return (
        <div class="flex print:hidden">
            <A
                class="inline-flex items-center border-b border-gray-300 px-4 py-2 text-sm text-gray-700 hover:border-gray-400 dark:border-gray-500 dark:text-white dark:hover:border-gray-300 sm:text-base"
                activeClass="border border-b-0 rounded-t-md"
                href="/cv/"
                end={true}
            >
                Summary
            </A>

            <A
                class="inline-flex items-center border-b border-gray-300 px-4 py-2 text-sm text-gray-700 hover:border-gray-400 dark:border-gray-500 dark:text-white dark:hover:border-gray-300 sm:text-base"
                activeClass="border border-b-0 rounded-t-md"
                href="/cv/details"
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
