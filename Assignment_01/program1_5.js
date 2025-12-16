// Accept Number from user and print that number of * on Display

////////////////////////////////////////////////////////////////////////
//
//  Function Name   :   PrintStar
//  Description     :   Used to Display * on screen
//  Input           :   iNo -> number
//  Output          :   * on screen
//  Author          :   Vivek BhaurajGautam
//  Date            :   17/12/2025
//
////////////////////////////////////////////////////////////////////////

function PrintStar(iNo)
{
   let iCnt = 0;

   for(iCnt = 1; iCnt <= iNo; iCnt++)
   {
        console.log("*\t");
   }
}

////////////////////////////////////////////////////////////////////////
//
//  Function Name   : main
//  Description     : Entry point of program
//
////////////////////////////////////////////////////////////////////////

function main()
{
    let iValue = 5;

    PrintStar(iValue);
}

main();