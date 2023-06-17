interface CategoryHeaderParams {
    text: string;
}

function CategoryHeader(headerParams: CategoryHeaderParams) {
    return <h1 class="text-2xl font-bold text-zinc-800 underline dark:text-neutral-300">{headerParams.text}</h1>;
}

export default CategoryHeader;
