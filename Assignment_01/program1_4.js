// Accept Number from user and check wether the nUnmnber is divisible by 5 or Not

////////////////////////////////////////////////////////////////////////
//
//  Function Name   :   CheckDivisible
//  Description     :   Used to Check number is divisible by 5 or not
//  Input           :   iNo -> number
//  Output          :   it return if number is divisible by 5 else return false
//  Author          :   Vivek BhaurajGautam
//  Date            :   17/12/2025
//
////////////////////////////////////////////////////////////////////////

function CheckDivisible(iNo)
{
    if((iNo % 5) == 0)
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
//  Function Name   : main
//  Description     : Entry point of program
//
////////////////////////////////////////////////////////////////////////


function main()
{
    let iValue = 15;
    let bRet = false;

    bRet = CheckDivisible(iValue);

    if(bRet == true )
    {
        console.log(iValue," is Divisible by 5");
    }
    else
    {
        console.log(iValue ," is Not  Divisible by 5 \n");
    }
}

main();