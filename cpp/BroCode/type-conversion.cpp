#include <iostream>

int main(){
    
    // type conversion é converter o valor de um tipo de dado em outro
    // Implicit = automatic
    // Explicit = precede value with new data type (int)

    int correct = 41;
    int questions = 47;

    double score = correct/(double)questions * 100;

    std::cout << score << "%";

    return 0;
}
