// Accept number form user and Check Number is even or odd

////////////////////////////////////////////////////////////////////////
//
//  Function Name   :   CheckEvenOdd
//  Description     :   Used to Check number is even or odd
//  Input           :   Integer,Integer,Integer
//  Output          :   it return true if number is even else it return false if number is odd
//  Author          :   Vivek Bhauraj Gautam
//  Date            :   17/12/2025
//
////////////////////////////////////////////////////////////////////////

function CheckEvenOdd(iNo)
{
    if((iNo % 2) == 0)
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
//  Entry point function : Main
//
////////////////////////////////////////////////////////////////////////

function main()
{
    let iValue = 21;
    let bRet = false;

    bRet = CheckEvenOdd(iValue);

    if(bRet == true)
    {
        console.log(iValue," : is Even Number ");
    }
    else 
    {
        console.log(iValue," : is Odd Number ");
    }

}

main;