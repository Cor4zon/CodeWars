function stringify(list) {
  let resultStr = '';
  let curNode = list;
  while (curNode) {
    resultStr += curNode.data + ' -> ';
    curNode = curNode.next;
  }
  resultStr += 'null';
  return resultStr;
}

// smart way
function stringify(list) {
  return list === null ? 'null' : list.data + ' -> ' + stringify(list.next);
}
