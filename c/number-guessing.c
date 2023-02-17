#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(){
    const int MIN = 1;
    const int MAX = 100;

    int guess;
    int guesses;
    int answer;

    // uses the current time as a seed
    srand(time(0));

    // Generate a random number between MIN and MAX
    answer = (rand() % MAX) + MIN;

    do {
        printf("\nEnter a guess: ");
        scanf("%d", &guess);
        if (guess > answer){
            printf("Too high!\n");
        } else if (guess < answer){
            printf("Too low!\n");
        } else {
            printf("\nCONGRATULATIONS!\n");
        }
        guesses++;
    } while ( guess != answer);

    printf("**********************\n");
    printf("answer: %d\nguesses: %d\n", answer, guesses);
    printf("**********************");

    return 0;
}
