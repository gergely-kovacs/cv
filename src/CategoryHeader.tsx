import { JSX } from 'solid-js';

interface CategoryHeaderParams {
    text: string;
    children?: JSX.Element;
}

function CategoryHeader(headerParams: CategoryHeaderParams) {
    return (
        <>
            <h1 class="flex justify-between border-b-2 border-zinc-800 pb-1 text-2xl font-bold text-zinc-800 dark:border-neutral-300 dark:text-neutral-200">
                <span>{headerParams.text}</span>
                {headerParams.children && <span>{headerParams.children}</span>}
            </h1>
        </>
    );
}

export default CategoryHeader;
