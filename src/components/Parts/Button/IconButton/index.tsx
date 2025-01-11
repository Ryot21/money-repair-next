
import "@/styles/globals.scss";

type Props = {
    href : string;
    children: React.ReactNode;
}

export default function IconButtonLink ({href, children}: Props){
    return(
        <a href={href} className={"s-M -s14 -b -white -ls-3 -ws-n"}>
            {children}
        </a>
    );
}