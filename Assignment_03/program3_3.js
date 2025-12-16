// Write a program which accepts a number from user
// and prints even factors of that number

////////////////////////////////////////////////////////////////////////
//
//  Function Name   : DisplayEvenFactor
//  Description     : Used to display even factors of the given number
//  Input           : iNo -> number
//  Output          : Even factors on display
//  Author          : Vivek Bhauraj Gautam
//  Date            : 17/12/2025
//
////////////////////////////////////////////////////////////////////////

function DisplayEvenFactor(iNo)
{
    let iCnt = 0;

    // Handle negative input
    if (iNo < 0)
    {
        iNo = -iNo;
    }

    for (iCnt = 1; iCnt <= (iNo / 2); iCnt++)
    {
        if ((iNo % iCnt === 0) && (iCnt % 2 === 0))
        {
            console.log(iCnt);
        }
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
    let iValue = 25;
    DisplayEvenFactor(iValue);
}

main();
