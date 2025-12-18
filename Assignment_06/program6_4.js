// Write A program which Accept the number from user and Perform its Multiplication

////////////////////////////////////////////////////////////////////////
//
//  Function Name   :   Multiplication
//  Description     :   Used to Multiplay three number and it will handell all condition if any number is zero
//  Input           :   Number As iNo1 , iNo1 , iNo3
//  Output          :   It will display weather it is leap year or not
//  Author          :   Vivek Bhauraj Gautam
//  Date            :   17/12/2025
//
////////////////////////////////////////////////////////////////////////

function Multiplication(iNo1, iNo2, iNo3)
{
    if((iNo1 == 0) && (iNo2 == 0))
    {
        return iNo3;
    }
    else if((iNo2 == 0) && (iNo3 ==  0))
    {
        return iNo1;
    }
    else if((iNo3 == 0) && (iNo1 == 0))
    {
        return iNo2;
    }
    else if(iNo1 == 0)
    {
        return iNo2 * iNo3;
    }
    else if(iNo2 == 0)
    {
        return iNo1 * iNo3;
    }
    else if(iNo3 == 0)
    {
        return iNo2 * iNo1;
    }
    else
    {
        return iNo1 * iNo2 * iNo3;
    }
}

////////////////////////////////////////////////////////////////////////
//
//  Entry point function : Main
//
////////////////////////////////////////////////////////////////////////

function main()
{
    let iValue1 = 10, iValue2 = 11, iValue3 = 12;
    let iRet = 0;  

    iRet = Multiplication(iValue1, iValue2, iValue3);

    console.log("Multiplication of Three Number is : ",iRet);

}

main();