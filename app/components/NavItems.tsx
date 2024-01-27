import Link from "next/link";

type NavItemProps = { href: string; children: React.ReactNode };

export const NavItem = ({ href, children }: NavItemProps) => {
  return (
    <Link href={href} className=" ">
      <div className="inline-flex w-full items-center justify-center font-bold">
        <div className="text-accent ">{"<"}</div>
        <div className="font-semibold hover:text-accent">{children}</div>
        <div className="ml-1  text-accent">{"/>"}</div>
      </div>
    </Link>
  );
};
