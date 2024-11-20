import { useAnnotatedLinks } from "@/hooks/useRoughNotation";
import Link from "next/link";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  navigation: NavigationProps[];
  pathname: string;
}

const MobileNav = ({ isOpen, navigation, pathname }: MobileNavProps) => {
  const linkRefs = useAnnotatedLinks(navigation, pathname, isOpen);

  if (!isOpen) return null;

  return (
    <div className="flex md:hidden items-center justify-between mx-auto w-full md:max-w-screen-2xl rounded-b-3xl bg-mutedBackground backdrop-blur-[10px]">
      <ul className="flex flex-col pb-8 justify-center items-center w-full gap-3">
        {navigation.map((item) => (
          <li key={item.name}>
            <Link href={item.href} passHref>
              <span
                ref={(el) => {
                  if (el) linkRefs.current[item.name] = el;
                }}
              >
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
