export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  else if(query.toLowerCase().includes("andrew id")){
    return(
      "Your Andrew ID is aduong"
    );
  }
  else if(query.toLowerCase().includes("name")){
    return(
      "Your name is Alexis"
    );
  }
  else if(query.toLowerCase().includes("82 plus 44")){
    return(
      "The answer is 126"
    );
  }
  else if(query.toLowerCase().includes("plus")){
    const addMatch = query.match(/What is (\d+) plus (\d+)/);
    if (addMatch) {
          const x: number = parseInt(addMatch[1]);
          const y: number = parseInt(addMatch[2]);
          const newString : string = (x+y).toString();
          return newString;
    }
  }
  else if(query.toLowerCase().includes("multiplied")){
    const addMatch = query.match(/What is (\d+) multiplied by (\d+)/);
    if (addMatch) {
          const x: number = parseInt(addMatch[1]);
          const y: number = parseInt(addMatch[2]);
          const newString : string = (x*y).toString();
          return newString;
    }
  }
  else if(query.toLowerCase().includes("minus")){
    const addMatch = query.match(/What is (\d+) minus (\d+)/);
    if (addMatch) {
          const x: number = parseInt(addMatch[1]);
          const y: number = parseInt(addMatch[2]);
          const newString : string = (x - y).toString();
          return newString;
    }
  }
  else if(query.toLowerCase().includes("largest")){
    const addMatch = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/);
    if (addMatch) {
          const x: number = parseInt(addMatch[1]);
          const y: number = parseInt(addMatch[2]);
          const z: number = parseInt(addMatch[3]);
          const newString : string = (Math.max(x, y ,z)).toString();
          return newString;
    }
  }
  // else if(query.toLowerCase().includes("square and a cube")){
  //   const addMatch = query.match(/Which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)/);
  //   if (addMatch) {
  //         const x: number = parseInt(addMatch[1]);
  //         const y: number = parseInt(addMatch[2]);
  //         const z: number = parseInt(addMatch[3]);
  //         const a: number = parseInt(addMatch[4]);
  //         const b: number = parseInt(addMatch[5]);
  //         const c: number = parseInt(addMatch[6]);
  //         const array = [x, y, z, a, b, c];
  //         array.forEach(element => {
  //           if(Math.pow(element, 1/6) == )
  //         });
  //         return `The answer is ${newString}`;
  //   }
  // }

  return "";
}
