export function toRna([...dna]: string): string {
  const complements = new Map([[ 'G', 'C'], ['C', 'G'], ['T', 'A'], ['A', 'U']]);
  let result = '';

  dna.forEach((char) => { 
    if(complements.has(char)) result += complements.get(char); 
    else throw Error("Invalid input DNA.") }
  );
  
  return result;
}
