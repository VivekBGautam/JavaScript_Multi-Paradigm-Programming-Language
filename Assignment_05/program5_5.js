// Accept two number form user and Find Max Number

////////////////////////////////////////////////////////////////////////
//
//  Function Name   :   FindMax
//  Description     :   Used to find maximum number
//  Input           :   Integer,Integer,Integer
//  Output          :   Maximum Value out of three number
//  Author          :   Vivek Bhauraj Gautam
//  Date            :   17/12/2025
//
////////////////////////////////////////////////////////////////////////

function FindMax(iNo1, iNo2, iNo3)
{
    if((iNo1 >= iNo2) && (iNo1 >= iNo3))
    {
        return iNo1;
    }
    else if((iNo2 >= iNo1) && (iNo2 >= iNo3))
    {
        return iNo2;
    }
    else
    {
        return iNo3;
    }
}

////////////////////////////////////////////////////////////////////////
//
//  Entry point function : Main
//
////////////////////////////////////////////////////////////////////////

function main()
{
    let iValue1 = 13, iValue2 = 10, iValue3 = 15;
    let iRet = 0;

    
    iRet = FindMax(iValue1, iValue2, iValue3);
    console.log(iRet," is A Max Number ");

}

main();