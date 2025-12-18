// Write a program which accepts a number from user and checks
// whether that number is greater than 100 or not

////////////////////////////////////////////////////////////////////////
//
//  Function Name   : CheckGreaterOrNot
//  Description     : Used to check whether given number is greater than 100 or not
//  Input           : Number -> iNo
//  Output          : Returns true if number is greater than 100
//                    otherwise returns false
//  Author          : Vivek Bhauraj Gautam
//  Date            : 17/12/2025
//
////////////////////////////////////////////////////////////////////////

function CheckGreaterOrNot(iNo)
{
    return (iNo > 100);
}

////////////////////////////////////////////////////////////////////////
//
//  Entry point function : main
//
////////////////////////////////////////////////////////////////////////

function main()
{
    let iValue = 108;
    let bRet = false;

    bRet = CheckGreaterOrNot(iValue);

    if(bRet)
    {
        console.log(iValue + " is greater than 100");
    }
    else
    {
        console.log(iValue + " is less than or equal to 100");
    }
}

// Function call
main();
