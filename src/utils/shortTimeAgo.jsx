import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const shortTimeAgo = (timestamp) => {
  const now = dayjs();
  const time = dayjs(timestamp);

  const diffSec = now.diff(time, "seconds");
  const diffMin = now.diff(time, "minutes");
  const diffHour = now.diff(time, "hours");
  const diffDay = now.diff(time, "days");
  const diffWeek = now.diff(time, "weeks");
  const diffMonth = now.diff(time, "months");
  const diffYear = now.diff(time, "years");

  if (diffSec < 60) return `${diffSec}s ago`;
  if (diffMin < 60) return `${diffMin}m ago`;
  if (diffHour < 24) return `${diffHour}h ago`;
  if (diffDay < 7) return `${diffDay}days ago`;
  if (diffWeek < 4) return `${diffWeek}week ago`;
  if (diffMonth < 12) return `${diffMonth}month ago`;
  return `${diffYear}year ago`;
};
