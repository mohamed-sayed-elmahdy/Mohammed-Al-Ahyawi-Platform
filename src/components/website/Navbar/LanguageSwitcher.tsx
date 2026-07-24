import { AiOutlineGlobal } from "react-icons/ai";


export default function LanguageSwitcher() {
  return (
    <button
    type="button"
    aria-label="تغيير اللغة"
      className="group flex items-center cursor-pointer gap-1 rounded-full px-2 py-2  transition-colors duration-300 "
    > 
    <span className="group-hover:text-(--color-accent) text-sm text-[--color-text]">EN</span>
      <AiOutlineGlobal size={18} className="text-(--color-accent)" />
    </button>
  );
}