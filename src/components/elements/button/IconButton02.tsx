import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function Iconbutton02({ href, children }: Props) {
    return (
      <Link href={href} className={"s-M -s14 -b -lp_c03 -ls-1 -ws-n"}>
        {children}
      </Link>
    );
}