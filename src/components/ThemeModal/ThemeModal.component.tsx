import React, {useEffect, useState} from 'react';
import AbstractModal from "../AbstractModal/AbstractModal.tsx";
import {PopsType} from "../../reducers/pops/pops.interface.ts";
const  themes= [
    "darkpurple",
    "bluebeard",
    "darksoul",
    "red",
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
]
const ThemeModal = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredThemes, setFilteredThemes] = useState(themes);
    const getThemeActive = () => {
        return localStorage.getItem('theme')
    }
    const changeTheme = (theme: string) => {
        const element = document.getElementsByTagName('html')[0];
        element.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme)
    }
    useEffect(() => {

        const myTheme = getThemeActive();

        if (myTheme === null) {
            localStorage.setItem('theme', themes[0])
        } else {
            changeTheme(myTheme)
        }
    }, [])

    useEffect(() => {
        // Filter themes based on the search query
        const filtered = themes.filter(theme =>
            theme.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredThemes(filtered);
    }, [searchQuery]);
    return (
        <AbstractModal ModalType={PopsType.ThemesMenu} className={" md:!w-11/12 md:!max-w-5xl"} >
            {(closeModal)=>(
                <div>
                    <div className="mb-5">
                        <h3 className="text-xl font-bold mb-3">Themes</h3>
                        <input
                            type="text"
                            placeholder="Search themes..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="input input-bordered w-full "
                        />
                    </div>
                    <div className=" grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

                        {filteredThemes.map((theme, index) => (
                            <div className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent"
                                 onClick={()=>changeTheme(theme)}
                                 data-set-theme={theme} data-act-class="!outline-base-content">
                                <div data-theme={theme} className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                    <div className="grid grid-cols-5 grid-rows-3">
                                        <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                                        <div className="bg-base-300 col-start-1 row-start-3"></div>
                                        <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                                            <div className="font-bold">{theme}</div>
                                            <div className="flex flex-wrap gap-1" data-svelte-h="svelte-1kw79c2">
                                                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                                    <div className="text-primary-content text-sm font-bold">A</div>
                                                </div> <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                                <div className="text-secondary-content text-sm font-bold">A</div></div>
                                                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                                    <div className="text-accent-content text-sm font-bold">A</div>
                                                </div> <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                                                <div className="text-neutral-content text-sm font-bold">A</div></div> </div></div></div></div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </AbstractModal>
    );
};

export default ThemeModal;
