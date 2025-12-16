// write a program which accept the number from user and Dispaly diffrence between factor and non factor

////////////////////////////////////////////////////////////////////////
//
//  Function Name   :   DiffBetwFactorAndNonFactor
//  Description     :   Used to Display Differece Between Factor And Non Factor
//  Input           :   iNo -> number
//  Output          :   return Summention of factor and non factor number
//  Author          :   Vivek Bhauraj Gautam
//  Date            :   17/12/2025
//
////////////////////////////////////////////////////////////////////////

function DiffBetwFactorAndNonFactor(iNo)
{
    let iCnt = 0;
    let iSum1 = 0;
    let iSum2 = 0;

    if(iNo < 0)
    {
        iNo = -iNo;
    }

    for(iCnt = 1; iCnt < iNo; iCnt++)
    {
        if((iNo % iCnt) != 0)
        {
            iSum1 = iSum1 + iCnt;
        }
        else
        {
            iSum2 = iSum2 + iCnt;
        }
    }
    
    console.log(iSum1," Non factor ");
    console.log(iSum2," factor ");
    return iSum2 - iSum1;
}

function main()
{
    let iValue = 50;
    let iRet = 0;

    iRet = DiffBetwFactorAndNonFactor(iValue);

    console.log("Diffrence between All Factor and  Non factors : ",iRet);

}

main();