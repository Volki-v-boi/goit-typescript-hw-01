function showMessage(message: string): void {
  console.log(message);
}

// Аргумент message має тип string.
// Функція не повертає значення, тому її тип — void.

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

// Аргументи num1 і num2 мають тип number.
// Повертає значення типу number.

function customError(): never {
  throw new Error("Error");
}

// Функція не приймає аргументів.
// Повертає — never, оскільки функція завжди викликає виняток і не повертає значення.
