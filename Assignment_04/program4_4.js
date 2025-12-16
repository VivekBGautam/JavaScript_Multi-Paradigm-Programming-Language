// displays the summation of non-factors of that number

////////////////////////////////////////////////////////////////////////
//
//  Function Name   : SummationNonFactors
//  Description     : Used to perform summation of all non-factors
//  Input           : iNo -> number
//  Output          : Returns summation of non-factors
//  Author          : Vivek Bhauraj Gautam
//  Date            : 17/12/2025
//
////////////////////////////////////////////////////////////////////////

function SummationNonFactors(iNo)
{
    let iCnt = 0;
    let iSum = 0;

    // Handle negative input
    if (iNo < 0)
    {
        iNo = -iNo;
    }

    for (iCnt = 1; iCnt <= iNo; iCnt++)
    {
        if ((iNo % iCnt) !== 0)
        {
            iSum = iSum + iCnt;
        }
    }

    return iSum;
}

////////////////////////////////////////////////////////////////////////
//
//  Function Name   : main
//  Description     : Entry point of the program
//
////////////////////////////////////////////////////////////////////////

function main()
{
    let iValue = 30;
    let iRet = 0;

    iRet = SummationNonFactors(iValue);

    console.log("Summation of Non-Factors is :", iRet);
}

main();