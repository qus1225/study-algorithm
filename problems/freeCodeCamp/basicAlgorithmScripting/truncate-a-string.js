function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  }

  let result = str.substring(0, num).trim();
  result += "..."
  return result;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
