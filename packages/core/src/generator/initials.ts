export const getInitials = (value: string) => {
 if (!value.trim()) {
  throw new Error("Provide a valid value to get the initials of");
 }

 const words = value.trim().split(/\s+/);

 if (words.length === 1) {
  return words[0].slice(0, 2).toUpperCase();
 }

 return (
  words[0].charAt(0).toUpperCase() +
  words[words.length - 1].charAt(0).toUpperCase()
 );
};

if (import.meta.main) {
 console.log(getInitials("Charmingdc"));
 console.log(getInitials("Charming Dc"));
 console.log(getInitials("Charming     Muis Dc"));
}
