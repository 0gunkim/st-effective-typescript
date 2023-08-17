// tsConfig: {"noImplicitAny":true,"strictNullChecks":true}

const el = document.getElementById("status");
// el.textContent = "Ready";
// ~~ Object is possibly 'null'

if (el) {
  el.textContent = "Ready"; // OK, null has been excluded
}
el!.textContent = "Ready"; // OK, we've asserted that el is non-null
// "!" 강제 케스팅(값이 null이라도 아닌) "?" 와 반대 개념
export default {};
