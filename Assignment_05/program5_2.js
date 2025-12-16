// Accept two number form user and Find Max Number

////////////////////////////////////////////////////////////////////////
//
//  Function Name   :   FindMax
//  Description     :   Used to find maximum number
//  Input           :   Integer,Integer
//  Output          :   Maximum Value out of two number
//  Author          :   Vivek Bhauraj Gautam
//  Date            :   17/12/2025
//
////////////////////////////////////////////////////////////////////////

function FindMax(iNo1, iNo2)
{
    if(iNo1 > iNo2)
    {
        return iNo1;
    }
    else
    {
        return iNo2;
    }
}

////////////////////////////////////////////////////////////////////////
//
//  Entry point function : Main
//
////////////////////////////////////////////////////////////////////////

function main()
{
    let iValue1 = 10, iValue2 = 12;
    let iRet = 0;

    if(iRet == iValue1)
    {
        console.log(iValue1," : is a greater number ");
    }
    else
    {
        console.log(iValue2," : is a greater number ");
    }

}

main();