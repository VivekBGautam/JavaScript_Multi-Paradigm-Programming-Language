////////////////////////////////////////////////////////////////////////
//
//  Function Name   : ConvertCharacter
//  Description     : Used to change the case of given character
//  Input           : cChar -> character
//  Output          : Converted character on display
//  Author          : Vivek Bhauraj Gautam
//  Date            : 17/12/2025
//
////////////////////////////////////////////////////////////////////////

function ConvertCharacter(cChar)
{
    if ((cChar >= 'a') && (cChar <= 'z'))
    {
        console.log(cChar.toUpperCase());
    }
    else if ((cChar >= 'A') && (cChar <= 'Z'))
    {
        console.log(cChar.toLowerCase());
    }
    else
    {
        console.log("Invalid input");
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
    let cValue = 'a';
    ConvertCharacter(cValue);
}

main();
