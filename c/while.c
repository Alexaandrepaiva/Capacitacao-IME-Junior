#include <stdio.h>
#include <string.h>

int main(){
    // while loop = repeats a section of code possibly inlimited times while some condition remains true

    char name[40];

    printf("\nWhat's your name?\n");
    fgets(name, 40, stdin);
    name[strlen(name)-1]='\0';

    while (strlen(name) == 0) {
        printf("You did not enter your name!");
        printf("\nWhat's your name?\n");
        fgets(name, 40, stdin);
        name[strlen(name)-1]='\0';
    }

    printf("\nHello, %s", name);

    return 0;
}