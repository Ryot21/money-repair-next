import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function Iconbutton({ href, children }: Props) {
  return (
    <Link href={href} className={"s-M -s14 -b -white -ls-1 -ws-n"}>
      {children}
    </Link>
  );
}