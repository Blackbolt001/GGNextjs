import {useTheme} from "next-themes";

export const ThemeSwitcher = () => {
    const {theme, setTheme } = useTheme()

return (
    <div>
        the current theme is : {theme}
        <button onClick={() => setTheme('light')}>LightMode</button>
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
)
};