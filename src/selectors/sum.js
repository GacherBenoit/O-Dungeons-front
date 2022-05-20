export default function sum(num1, num2) {
  const firstNumber = num1 || 0;
  const result = (firstNumber + num2) || 0;
  return result;
}
