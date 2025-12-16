 // Accept two number form user and check leap year

////////////////////////////////////////////////////////////////////////
//
//  Function Name   :   CheckLeapYear
//  Description     :   Used to check input year is leap year or not
//  Input           :   Integer,Integer,Integer
//  Output          :   It will display weather it is leap year or not
//  Author          :   Vivek Bhauraj Gautam
//  Date            :   17/12/2025
//
////////////////////////////////////////////////////////////////////////

function CheckLeapYear(iNo)
{
    if((iNo % 4) == 0)
    {
        console.log(iNo," is A Leap Year ");
    }
    else
    {
        console.log(iNo," is Not A Leap year");
    }
}

////////////////////////////////////////////////////////////////////////
//
//  Entry point function : Main
//
////////////////////////////////////////////////////////////////////////

function main()
{
    let iValue = 2024;

    CheckLeapYear(iValue);

}

main();