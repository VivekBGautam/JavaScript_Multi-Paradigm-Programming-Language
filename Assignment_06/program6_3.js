// Write A program which Accept the number from user and acheck wether that number is greater than 100 or Not

////////////////////////////////////////////////////////////////////////
//
//  Function Name   :   CheckGraterOrNot
//  Description     :   Used to check given number is greater than 100 or not
//  Input           :   Integer
//  Output          :   It will return true if number is greater than 100 else return false
//  Author          :   Vivek Bhauraj Gautam
//  Date            :   17/12/2025
//
////////////////////////////////////////////////////////////////////////

function CheckGraterOrNot(iNo)
{
    if(iNo > 100)
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
    let iValue = 87;
    let bRet = false;
    

    bRet = CheckGraterOrNot(iValue);

    if(bRet == true)
    {
        console.log(iValue," is greater than 100 ");
    }
    else
    {
        console.log(iValue," is Less than 100 ");
    }

    
}

main();