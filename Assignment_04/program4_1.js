// write a program which accept the number froam user and Dispaly tha multiplication of factor of that number 

////////////////////////////////////////////////////////////////////////
//
//  Function Name   :   FactorsMult
//  Description     :   Used to multiply the factors
//  Input           :   iNo -> number
//  Output          :   return multiplicton of factors
//  Author          :   Vivek Bhauraj Gautam
//  Date            :   17/12/2025
//
////////////////////////////////////////////////////////////////////////

function FactorsMult(iNo)
{
    let iCnt = 0;
    let iMult = 1;

    if(iNo < 0)
    {
        iNo = -iNo;
    }

    for(iCnt = 1; iCnt <=(iNo/2); iCnt++)
    {
        if((iNo % iCnt) == 0)
        {
            iMult = iMult * iCnt;
        }
    }
    return iMult;
}

////////////////////////////////////////////////////////////////////////
//
//  Entry point function : Main
//
////////////////////////////////////////////////////////////////////////

function main()
{
    let iValue = 50;
    let iRet = 0;

    
    iRet = FactorsMult(iValue);

    console.log("Multiplication of Factors is : ",iRet);

}

main();