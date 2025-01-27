import Image from "next/image";
import styles from "./index.module.scss";
import { formatDate } from "@/libs/utils";

type Props = {
    date: string;
}

export default function Date({ date } : Props) {
    return (
        <time dateTime={formatDate(date)} className={`${styles.time}`}>
            <Image
                src="/images/SVG/clock.svg"
                alt="時計"
                width={12}
                height={12}
            />
            <span className={"s-SS -s12 -left -b -ls-2"}>{formatDate(date)}</span>
        </time>
    );
}