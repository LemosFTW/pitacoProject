import { HeaderTitle } from "@/interfaces/types";
export default function HeaderComponent({ titles }: { titles: HeaderTitle[] }) {
  return (
    <header className="w-full bg-gray-900 shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-center py-3">
        {titles.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-gray-100 px-4 py-2 rounded transition-colors duration-200 hover:bg-gray-800 hover:text-blue-400 font-medium text-lg"
          >
            {item.title}
          </a>
        ))}
      </nav>
    </header>
  );
}