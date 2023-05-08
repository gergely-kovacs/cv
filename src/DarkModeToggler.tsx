import "./DarkModeToggler.css";

function DarkModeToggler() {
  function toggleDarkMode() {
    document.querySelector("html")?.classList.toggle("dark");
  }

  return (
    <div className="print:hidden">
      <label className="switch">
        <input type="checkbox" defaultChecked onClick={toggleDarkMode} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default DarkModeToggler;
