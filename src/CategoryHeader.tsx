interface CategoryHeaderParams {
  text: string;
}

function CategoryHeader({ text }: CategoryHeaderParams) {
  return (
    <h1 className="text-2xl font-bold text-zinc-800 underline dark:text-neutral-300">
      {text}
    </h1>
  );
}

export default CategoryHeader;
