const HELLOS = ['Bonjour', 'Kia Ora', 'Howdy', 'Hey there', 'Hola', 'Ciao'];

export const getHello = () => {
  // Generate random number between 0 and length of HELLOS
  const max = HELLOS.length - 1;
  const index = Math.round(Math.random() * max);
  return HELLOS[index];
};
