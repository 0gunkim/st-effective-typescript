// tsConfig: {"noImplicitAny":true,"strictNullChecks":false}
// strictNullChecks를 해제 한다면 number가 null or undefined가 될 수가 있다.
const x: number | null = null; // OK, null is a valid number

export default {};
