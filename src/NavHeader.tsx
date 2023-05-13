import DarkModeToggler from "./DarkModeToggler";

function NavHeader() {
  return (
    <div className="flex">
      {/* TODO: add path for summary / details */}
      <div className="ml-auto">
        <DarkModeToggler></DarkModeToggler>
      </div>
    </div>
  );
}

export default NavHeader;
