import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AlignJustify } from "lucide-react";
import Logo from "./Logo";
export default function Header() {
  return (
    <header className="w-full h-14 flex justify-between items-center px-3 shadow-md">
      <AlignJustify color="black" size={24} />
      <Logo />
      <Avatar>
        <AvatarImage src="/profile.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </header>
  );
}
