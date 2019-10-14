# lotterApp-in-vanillaJs
this lottery app displays 20 random numbers in which only 3 can be winners.
each time you click the generate button, 20 new random numbers are created

notes:

this is how winning and uwinning random numbers were generated

created a new number by adding the sum of  squares of each digit in that number. For example, given 203, our new  number is 4 + 0 + 9 = 13.  
 
If we repeat this process, we get a sequence of numbers:  203 -> 13 -> 10 -> 1 -> 1    Sometimes, like with 203, the sequence reaches (and stays at) 1. Numbers  like this are called ​winning​.    Not all numbers are winning. If we started with 11, the sequence would be:  11 -> 2 -> 4 -> 16 -> ...  This sequence will never reach 1, and so the number 11 is called  unwinning​.    Given a positive whole number, you have to determine whether that  number is ​winning​ or ​not​.    Examples:  winning(203) ➞ true 

 
winning(11) ➞ false winning(107) ➞ false 

.... I used recursion to solve this scenario
