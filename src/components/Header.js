

function Header({onHandleDarkModeClick, isDarkMode}){
    return (
        <header>
            <h2>Shopster</h2>
                <button onClick={onHandleDarkModeClick}>
                    {isDarkMode ? "Dark" : "Light"} Mode
                </button>
      </header>
    )

}

export default Header;