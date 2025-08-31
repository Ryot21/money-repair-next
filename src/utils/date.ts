import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (date: string) => {
  return dayjs.utc(date).tz("Asia/Tokyo").format("YYYY/MM/DD");
};

// 日付の比較用関数
export const isSameDate = (date1: string, date2: string): boolean => {
  const d1 = dayjs.utc(date1).tz("Asia/Tokyo").startOf("day");
  const d2 = dayjs.utc(date2).tz("Asia/Tokyo").startOf("day");
  return d1.isSame(d2);
};

// 日付が有効かチェック
export const isValidDate = (date: string): boolean => {
  return dayjs(date).isValid();
};
