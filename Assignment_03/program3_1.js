// Write a program which accepts one number from user
// and prints that number of even numbers on screen

////////////////////////////////////////////////////////////////////////
//
//  Function Name   : PrintEven
//  Description     : Used to display first N even numbers on screen
//  Input           : iNo -> number
//  Output          : Even numbers on display
//  Author          : Vivek Bhauraj Gautam
//  Date            : 17/12/2025
//
////////////////////////////////////////////////////////////////////////

function PrintEven(iNo)
{
    let iCnt = 1;
    let iEven = 0;

    if (iNo <= 0)
    {
        return;
    }

    while (iCnt <= iNo)
    {
        iEven = 2 * iCnt;
        console.log(iEven);
        iCnt++;
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
    let iValue = 20;
    PrintEven(iValue);
}

main();
