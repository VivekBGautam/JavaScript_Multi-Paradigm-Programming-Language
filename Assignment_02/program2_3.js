// Accept the number from user and if number is less than 10 print "Hello"
// Otherwise print "Demo"

////////////////////////////////////////////////////////////////////////
//
//  Function Name   : Display
//  Description     : Prints "Hello" if the given number is less than 10,
//                    otherwise prints "Demo"
//  Input           : iNo -> number
//  Output          : Message on display
//  Author          : Vivek Bhauraj Gautam
//  Date            : 17/12/2025
//
////////////////////////////////////////////////////////////////////////

function Display(iNo)
{
    if (iNo < 10)
    {
        console.log("Hello");
    }
    else
    {
        console.log("Demo");
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
