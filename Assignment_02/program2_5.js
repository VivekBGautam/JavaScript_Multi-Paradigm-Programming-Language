// Accept the number from user and check whether the number is even or odd

////////////////////////////////////////////////////////////////////////
//
//  Function Name   : CheckEvenOdd
//  Description     : Checks whether the given number is even or odd
//  Input           : iNo -> number
//  Output          : Returns true if number is even, otherwise false
//  Author          : Vivek Bhauraj Gautam
//  Date            : 17/12/2025
//
////////////////////////////////////////////////////////////////////////

function CheckEvenOdd(iNo)
{
    if ((iNo % 2) === 0)
    {
        return true;
    }
    else
    {
        return false;
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
    let iValue = 12;
    let bRet = false;

    bRet = CheckEvenOdd(iValue);

    if (bRet === true)
    {
        console.log(iValue + " is EVEN Number");
    }
    else
    {
        console.log(iValue + " is ODD Number");
    }
}

main();
