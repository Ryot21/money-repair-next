import Image from "next/image";
import styles from "./index.module.scss";

type Props = {
    date: string;
}

export default function Date({ date } : Props) {
    return (
        <p className={styles.time}>
            <Image
                src="/images/SVG/clock.svg"
                alt="時計"
                width={12}
                height={12}
            />
            <span className={"s-M -s16 -left -b -ls-2"}>{date}</span>
        </p>
    );
}