
export function FormatTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    hours = hours === 0 ? '00' : hours;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes
    return strTime;
  }