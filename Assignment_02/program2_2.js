// Accept the Number froam use and Print that number of * on Dispaly

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

    if(iNo < 0)
    {
        iNo = -iNo;
    }

    while(iNo > 0)
    {
        console.log("*");
        iNo--;
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