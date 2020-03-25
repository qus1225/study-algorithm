export function linearSearch(list, itemToSearch) {
  let result;

  for (const item of list) {
    if (item === itemToSearch) {
      result = list.indexOf(item);
      break;
    }
  }

  return result;
}
