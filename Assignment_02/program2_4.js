// Accept two numbers from user and display first number
// second number of times

////////////////////////////////////////////////////////////////////////
//
//  Function Name   : Display
//  Description     : Displays the first number iNo1,
//                    iNo2 number of times on screen
//  Input           : iNo1 -> number to display
//                    iNo2 -> number of times
//  Output          : Prints number on display
//  Author          : Vivek Bhauraj Gautam
//  Date            : 17/12/2025
//
////////////////////////////////////////////////////////////////////////

function Display(iNo1, iNo2)
{
    let iCnt = 0;

    // Handle negative frequency
    if (iNo2 < 0)
    {
        iNo2 = -iNo2;
    }

    for (iCnt = 1; iCnt <= iNo2; iCnt++)
    {
        console.log(iNo1);
    }
}

////////////////////////////////////////////////////////////////////////
//
//  Function Name   : main
//  Description     : Entry point of the program
//
////////////////////////////////////////////////////////////////////////

function main()
{
    let iValue1 = 10;
    let iValue2 = 15;

    Display(iValue1, iValue2);
}

main();
