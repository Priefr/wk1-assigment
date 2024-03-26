// student marks-grade calc
//tep prompt user for marks input
let marks = studentMarks(prompt("Enter the student's marks (between 0 and 100):"));
//if else  statement is used to check if th input is within the range 
if (marks >= 0 && marks <= 100) {
     // Determine grade based on marks
     let grade;
     if (marks > 79) {
         grade = 'A';
     } else if (marks >= 60 && marks <= 79) {
         grade = 'B';
     } else if (marks >= 50 && marks <= 59) {
         grade = 'C';
     } else if (marks >= 40 && marks <= 49) {
         grade = 'D';
     } else {
         grade = 'E';
     }
     // Output the grade scored by the student basing on the marks
     console.log("Grade:", grade);
} else {
    console.log("ERROR!. PLEASE ENTER THE CORRECT MARKS");
}
