interface CategoryHeaderParams {
  text: string;
}

function CategoryHeader({ text }: CategoryHeaderParams) {
  return (
    <h1 className="text-2xl font-bold text-stone-800 underline dark:text-sky-200">
      {text}
    </h1>
  );
}

export default CategoryHeader;
