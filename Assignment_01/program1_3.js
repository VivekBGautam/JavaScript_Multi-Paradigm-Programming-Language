// Print 5 to 1 on display

////////////////////////////////////////////////////////////////////////
//
//  Function Name   :   Display
//  Description     :   Used to Display 5 to 1 number using while loop
//  Input           :   -
//  Output          :   -> Display 5 to 1
//  Author          :   Vivek BhaurajGautam
//  Date            :   17/12/2025
//
////////////////////////////////////////////////////////////////////////

void Display()
{
    let iCnt = 0;

    iCnt = 5;

    while(iCnt > 0)
    {
        console.log("%d\n",iCnt);
        iCnt--;
    }
}

function main()
{
    Display();
}

main();