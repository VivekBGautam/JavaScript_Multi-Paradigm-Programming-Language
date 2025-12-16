// Accept number form user and Check Number is Positive Or Negetive Or Zero

////////////////////////////////////////////////////////////////////////
//
//  Function Name   :   CheckNumber
//  Description     :   used to Check number is positive or negative
//  Input           :   Integer
//  Output          :   It give the output as number is positive or negative
//  Author          :   Vivek Bhauraj Gautam
//  Date            :   17/12/2025
//
////////////////////////////////////////////////////////////////////////

function CheckNumber(iNo)
{
    if(iNo > 0 )
    {
        console.log(iNo," is Positive Number ");
    }
    else if(iNo < 0 )
    {
        console.log(iNo," is Negetive Number ");
    }
    else
    {
        console.log("Number is Zero(O)");
    }
}

////////////////////////////////////////////////////////////////////////
//
//  Entry point function : Main
//
////////////////////////////////////////////////////////////////////////

function main()
{
    let iValue = -21;

    CheckNumber(iValue);

}

main();