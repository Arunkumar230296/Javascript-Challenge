function getDayName(dateString) {
    let dayName;
   
   const date = new Date(dateString);
   
   const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

   const dayIndex = date.getDay();
  
   dayName = daysOfWeek[dayIndex];
   return dayName;
}




function main() {
   const d = +(readLine());
   
   for (let i = 0; i < d; i++) {
       const date = readLine();
       
       console.log(getDayName(date));
   }
}