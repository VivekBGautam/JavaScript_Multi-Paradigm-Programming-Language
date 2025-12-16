// Write a program which accepts a number from user and
// displays factors of that number in reverse order

////////////////////////////////////////////////////////////////////////
//
//  Function Name   : DisplayReverseFactors
//  Description     : Used to display factors in reverse order
//  Input           : iNo -> number
//  Output          : Displays factors in reverse order
//  Author          : Vivek Bhauraj Gautam
//  Date            : 17/12/2025
//
////////////////////////////////////////////////////////////////////////

function DisplayReverseFactors(iNo)
{
    let iCnt = 0;

    // Handle negative number
    if (iNo < 0)
    {
        iNo = -iNo;
    }

    for (iCnt = Math.floor(iNo / 2); iCnt >= 1; iCnt--)
    {
        if ((iNo % iCnt) === 0)
        {
            console.log(iCnt);
        }
    }
}

////////////////////////////////////////////////////////////////////////
//
//  Entry point function : main
//
////////////////////////////////////////////////////////////////////////

function main()
{
    let iValue = 20;

    DisplayReverseFactors(iValue);
}

main();
