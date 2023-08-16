let city = "new york city";
console.log(city.toUpperCase());

//toupercase() 이렇게 작성할 시 타입 체커가 문제점을 찾아 낸다.
// ~~~~~~~~~~~ Property 'toUppercase' does not exist on type
//             'string'. Did you mean 'toUpperCase'?

//타입 체커가 모든 오류를 잡아주지는 않는다.
