export const checkValidity = (value) => {
   return value.trim() !== '';
}

export const random = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1)) + min; //Включаючи мінімум та максимум 
}

export const shuffle = (arr) => {
   let randArray = [...arr];
   let j, temp;
   for (let i = randArray.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = randArray[j];
      randArray[j] = randArray[i];
      randArray[i] = temp;
   }

   return randArray;
}
