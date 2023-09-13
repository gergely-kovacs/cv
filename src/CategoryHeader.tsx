interface CategoryHeaderParams {
    text: string;
}

function CategoryHeader(headerParams: CategoryHeaderParams) {
    return (
        <>
            <h1 class="inline-block border-b-2 border-zinc-800 pb-1 text-2xl font-bold text-zinc-800 dark:border-neutral-300 dark:text-neutral-200">
                {headerParams.text}
            </h1>
        </>
    );
}

export default CategoryHeader;
