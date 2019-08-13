export const checkValidity = (value) => {
   return value.trim() !== '';
}

export const random = () => {
      return Math.floor(Math.random() * (83 - 0 + 0)) + 0; //Включаючи мінімум та максимум 
}

export const shuffle = (arr) => {
   let randArr = [...arr];
   let j, temp;
   for (let i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
   }
   return randArr;
}