const a = null + 7; // Evaluates to 7 in JS
// ~~~~ Operator '+' cannot be applied to types ...
// javascript -> number 7
const b = [] + 12; // Evaluates to '12' in JS
// ~~~~~~~ Operator '+' cannot be applied to types ...
// javascript -> string 12
alert("Hello", "TypeScript"); // alerts "Hello"
// ~~~~~~~~~~~~ Expected 0-1 arguments, but got 2
// javascript -> 실행이되고 하나만 출력
// typescript -> vsc에서 오류를 알려 준다.
