import { FaMoon } from "react-icons/fa";
import { PiSunDimFill } from "react-icons/pi";

export default function ThemeToggle() {
  return (
    <button
      type="button"
      aria-label="التبديل إلى الوضع الفاتح"
      className="
      flex h-7 w-7 
      cursor-pointer 
      items-center 
      justify-center 
      rounded-full border 
      border-white/30 
      text-(--color-text) 
      transition-colors 
      duration-300 
      hover:border-(--color-accent)"
    >
      <PiSunDimFill size={19} className="text-(--color-accent)" />
    </button>
  );
}