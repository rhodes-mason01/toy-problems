//input: J = "aA" string of length n, S = "aAAbbbb" string of length n
//outut: 3 integer of number of letters that match from J to S
//constraits: none
//edge cases: case sensitive a != A

var numJewelsInStones = function(J, S) {
  let stonesThatAreJewels = 0;
    //Take inputs and separate each letter into an array
      //how to separate each letter into an array
      //split("")
  J = J.split("");
  S = S.split("");
    //compare the letters in J to the letters in S and if they match, count how many match
      //how to compare letters in J to the ones in S
      //for-for-in loop
      for (let a = 0; a < J.length; a++) {
        const jewel = J[a];
        for (let b = 0; b < S.length; b++) {
          const stone = S[b];
          if (jewel[a] === stone[b]) 
            stonesThatAreJewels++;
        }
      }
      //how to count how many letters match
      //++
    //return the number of letters that match and output it as an integer 
      return stonesThatAreJewels;
};
