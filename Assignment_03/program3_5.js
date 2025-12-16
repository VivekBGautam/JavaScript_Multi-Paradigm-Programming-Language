
////////////////////////////////////////////////////////////////////////
//
//  Function Name   :   CheckVowel
//  Description     :   Used to check given input charector vowels or not
//  Input           :   Charector
//  Output          :   It will return true if charector is vowels 
//                      else it will return false
//  Author          :   Vivek Bhauraj Gautam
//  Date            :   17/12/2025
//
////////////////////////////////////////////////////////////////////////

function CheckVowel(cChar)
{
    if((cChar >= 65) && (cChar <= 90))
    {
        cChar = cChar.toUpperCase();
    }

    if((cChar == 'a') || (cChar == 'e') || (cChar == 'i') || (cChar == 'o') || (cChar == 'u'))
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
    let cValue = 'a';
    let bRet = false;

   
    bRet = CheckVowel(cValue);

    if(bRet == true)
    {
        console.log(cValue," : is A vowel \n");
    }
    else
    {
        printf(cValue," : is A Not vowel \n");
    }

}

main();