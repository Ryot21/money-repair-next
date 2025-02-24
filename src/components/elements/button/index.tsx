import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function Button({ href, children }: Props) {
  return (
    <Link href={href} className={"c-link -btn -center s-M -s14 -b -ls-2"}>
      {children}
    </Link>
  );
}
