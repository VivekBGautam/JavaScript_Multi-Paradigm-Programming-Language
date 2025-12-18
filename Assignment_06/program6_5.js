// Write A program which Accept the Total mark and Obtain mark And calcute percentage

////////////////////////////////////////////////////////////////////////
//
//  Function Name   :   CalculatePercent
//  Description     :   Used to calculate percentage by taking total mark and obtain mark
//  Input           :   Total Mark and obtain mark 
//  Output          :   It will return percentage 
//  Author          :   Vivek Bhauraj Gautam
//  Date            :   17/12/2025
//
////////////////////////////////////////////////////////////////////////

function CalculatePercent(iTotal, iObtain)
{
    let iPercent = 0.0;

    iPercent = ((iObtain / iTotal) * 100);
    return iPercent;
}

////////////////////////////////////////////////////////////////////////
//
//  Entry point function : Main
//
////////////////////////////////////////////////////////////////////////

function main()
{
    let iValue1 = 500, iValue2 = 422;
    let iRet = 0.0;  
    

    iRet = CalculatePercent(iValue1, iValue2);

    console.log("Your Percentage is is : ",iRet);

}

main();