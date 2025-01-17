import Image from "next/image";
import styles from "./index.module.scss";
import { formatDate } from "@/libs/utils";

type Props = {
    date: string;
}

export default function Date({ date } : Props) {
    return (
        <p className={`s-M -s16 -left -b -ls-2 ${styles.time}`}>
            <Image
                src="/images/SVG/clock.svg"
                alt="時計"
                width={12}
                height={12}
            />
            <span className={"s-M -s16 -left -b -ls-2"}>{formatDate(date)}</span>
        </p>
    );
}