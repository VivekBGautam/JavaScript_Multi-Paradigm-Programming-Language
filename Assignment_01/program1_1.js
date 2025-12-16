// Program to Divide two Numbers

////////////////////////////////////////////////////////////////////////
//
//  Function Name   :   Divide
//  Description     :   Used to perform Division of two number
//  Input           :   iNo1 , iNO2
//  Output          :   iAns -> 
//  Author          :   Vivek BhaurajGautam
//  Date            :   17/12/2025
//
////////////////////////////////////////////////////////////////////////

function Divide(iNo1, iNo2)
{
    let iAns = 0;

    if(iNo1 < iNo2)
    {
        return -1;
    }

    iAns = iNo1 / iNo2;

    return iAns;
}

////////////////////////////////////////////////////////////////////////
//
//  Function Name   : Main  which call Division funtion 
//                    it will pass two value as iValue1 and iValue2
//                    And take return value in iRet and display its value
//
////////////////////////////////////////////////////////////////////////

function main()
{
    let iValue1 = 15, iValue2 = 5;
    let iRet = 0;

    iRet = Divide(iValue1, iValue2);
    console.log("Division is :",iRet);
}

main();