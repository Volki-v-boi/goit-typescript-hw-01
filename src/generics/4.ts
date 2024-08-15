type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

// Оновлення частини полів користувача
function createOrUpdateUser(initialValues: Partial<User>) {
  // Оновлення користувача
  console.log(initialValues);
}
