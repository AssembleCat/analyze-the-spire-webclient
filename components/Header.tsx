export default function Header() {
    return (
        <header className="bg-gray-800 text-white py-8 px-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Analyze the Spire</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:text-gray-300">Home</a></li>
                    <li><a href="#" className="hover:text-gray-300">Cards</a></li>
                    <li><a href="#" className="hover:text-gray-300">Decks</a></li>
                </ul>
            </nav>
        </header>
    );
}

