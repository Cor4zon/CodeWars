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
