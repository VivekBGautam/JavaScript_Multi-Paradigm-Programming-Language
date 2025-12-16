// Write A program which Accept one Number from user and print that number of even factor of that number

////////////////////////////////////////////////////////////////////////
//
//  Function Name   :   DisplayFactor
//  Description     :   Used to Display Factor of given input Number
//  Input           :   iNo -> Number
//  Output          :   Integer
//  Author          :   Vivek BhaurajGautam
//  Date            :   17/12/2025
//
////////////////////////////////////////////////////////////////////////

void DisplayFactor(iNo)
{
    let iCnt = 0;
    
    if(iNo <= 0)
    {
        iNo = -iNo;
    }

    for(iCnt = 1; iCnt <= (iNo/2); iCnt++)
    {
        if((iNo % iCnt) == 0)
        {
            if((iCnt % 2) == 0)
            {
                console.log(iCnt);
            }
        }
    }
}

////////////////////////////////////////////////////////////////////////
//
//  Entry point function : Main
//
////////////////////////////////////////////////////////////////////////

function main()
{
    let iValue = 20;

    DisplayFactor(iValue);
}

main();