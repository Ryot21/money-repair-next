
import "@/styles/globals.scss";

type Props = {
    href : string;
    children: React.ReactNode;
}

export default function PageButtonLink ({href, children}: Props){
    return(
        <a href={href} className={"c-link -btn -center s-M -s14 -b -ls-2"}>
            {children}
        </a>
    );
}