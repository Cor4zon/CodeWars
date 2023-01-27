const OPEN_BRACES = ['[', '(', '{'];
const CLOSE_BRACES = [']', ')', '}'];

function isPairBraces( openBrace, closeBrace ) {
    if (OPEN_BRACES.indexOf(openBrace) === CLOSE_BRACES.indexOf(closeBrace)) {
        return true;
    } 
    return false;
}

function validParentheses(parens) {
  const stack = [];
  for (let i = 0; i < parens.length; i++) {
    if (OPEN_BRACES.includes(parens[i])){
        stack.push(parens[i]);
    } else if (CLOSE_BRACES.includes(parens[i])) {
        if (stack.length === 0){
            return false;
        } else {
            const openBrace = stack.pop();
            if (isPairBraces(openBrace, parens[i])) {
                continue;
            } else {
                return false
            }
        }
    }
  }
  console.log(stack);
  if (stack.length) {
    return false;
  }
  return true;

}
