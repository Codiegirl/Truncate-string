function truncateString(str, num){
    if (num>=str.length) return str;
    if (num <=3) return str.slice(0, num) + "..."
    return str.slice(0, num-3) + "...";//make num -3 to make room for the 3 dots.
  }
  
  
  truncateString("tommy goes to work", 2)