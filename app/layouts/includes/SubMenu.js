import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function SubMenu() {
    const [activeLink, setActiveLink] = useState(null);

    const menuItems = [
        { id: 1, name: 'Home', route: 'home' },
        { id: 3, name: 'Electronics', route: 'Electronics' },
        { id: 4, name: 'Motors', route: 'Motors' },
        { id: 5, name: 'Fashion', route: 'Fashion' },
        { id: 6, name: 'Collectables and Art', route: 'Collectables' },
        { id: 7, name: 'Sports', route: 'Sports' },
        { id: 8, name: 'Health & Beauty', route: 'Health' },
        { id: 9, name: 'Industrial Equipment', route: 'Industrial' },
        { id: 10, name: 'Home & Garden', route: 'Home/Garden' },
    ];

    useEffect(() => {
        const storedActiveLink = cookies.get('activeLink');
        if (storedActiveLink) {
            setActiveLink(storedActiveLink);
        }
    }, []);

    const handleItemClick = (route) => {
        setActiveLink(route);
        cookies.set('activeLink', route);
        window.location.href = '/'; 
    };

    return (
        <>
            <div id="SubMenu" className="border-b">
                <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                    <ul
                        id="TopMenuLeft"
                        className="
                            flex
                            items-center
                            text-[13px]
                            text-[#333333]
                            px-2
                            h-8
                        "
                    >
                        {menuItems.map((item) => (
                            <li
                                key={item.id}
                                className={`px-3 hover:text-blue-500 cursor-pointer ${
                                    activeLink === item.route ? 'underline' : ''
                                }`}
                                onClick={() => handleItemClick(item.route)}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
