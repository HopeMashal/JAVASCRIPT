function solution(S) {
    S = S.split("");
  var stack = [];
  for (var i = 0; i < S.length; i++) {
    var c = S[i];
    if (c == '{' || c == '(' || c == '[')
      stack.push(c);
    else if (c == '}' || c == ')' || c == ']') {
      var t = stack.pop() + c;
      if (t != "{}" && t != "()" && t != "[]")
        return 0;
    }
    else 
      return 0;
  }

  if (stack.length > 0)
    return 0;

  return 1;
}
console.log(solution('{[()()]}'));
console.log(solution('{([)()]}'));
