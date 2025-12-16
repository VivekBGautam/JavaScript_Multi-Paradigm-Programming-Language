// Accept the number from user and print that number of * on display

////////////////////////////////////////////////////////////////////////
//
//  Function Name   : Display
//  Description     : Used to display '*' on the screen based on given input
//  Input           : iNo -> number of stars to be printed
//  Output          : Prints '*' on display
//  Author          : Vivek Bhauraj Gautam
//  Date            : 17/12/2025
//
////////////////////////////////////////////////////////////////////////

function Display(iNo)
{
    let iCnt = 1;

    while (iCnt <= iNo)
    {
        console.log("*");
        iCnt++;
    }
}

////////////////////////////////////////////////////////////////////////
//
//  Function Name   : main
//  Description     : Entry point of the program
//
////////////////////////////////////////////////////////////////////////

function main()
{
    let iValue = 5;
    Display(iValue);
}

main();
