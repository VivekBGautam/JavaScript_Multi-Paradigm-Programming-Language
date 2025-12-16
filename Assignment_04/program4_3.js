// Write a program which accepts a number from user and
// displays all non-factors of that number

////////////////////////////////////////////////////////////////////////
//
//  Function Name   : DisplayNonFactors
//  Description     : Used to display all non-factors of a given number
//  Input           : iNo -> number
//  Output          : Non-factors on display
//  Author          : Vivek Bhauraj Gautam
//  Date            : 17/12/2025
//
////////////////////////////////////////////////////////////////////////

function DisplayNonFactors(iNo)
{
    let iCnt = 0;

    // Handle negative input
    if (iNo < 0)
    {
        iNo = -iNo;
    }

    for (iCnt = 1; iCnt <= iNo; iCnt++)
    {
        if ((iNo % iCnt) !== 0)
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
    let iValue = 20;
    DisplayNonFactors(iValue);
}

main();
