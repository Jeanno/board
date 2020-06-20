
export function formatDateTime(datetime) {
  const unixTime = Date.parse(datetime);
  const now = Date.now();
  const secondsAgo = (now - unixTime) / 1000;
  if (secondsAgo < 60) {
    return "Just now";
  } else if (secondsAgo < 3600) {
    const minsAgo = Math.floor(secondsAgo / 60);
    return minsAgo + " minutes ago";
  } else if (secondsAgo < 86400) {
    const hoursAgo = Math.floor(secondsAgo / 3600);
    return hoursAgo + " hours ago";
  }
  const date = new Date(unixTime);
  const yearFormat = date.getFullYear() === new Date(now).getFullYear() ?
    undefined : 'numeric';
  const options = {
    month: 'short', day: 'numeric', year: yearFormat,
    hour: 'numeric', minute: 'numeric'
  };
  return new Intl.DateTimeFormat('default', options).format(date);
}

