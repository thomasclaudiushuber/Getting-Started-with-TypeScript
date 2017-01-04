function getNumber(init)
{
   if(init)
   {
       // Change "var" to "let", and you'll get an error when accessing x below this if-statement
       var x = 9;
   }
   return x;
}
