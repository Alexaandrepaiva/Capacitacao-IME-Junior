#include <iostream>

int main(){
    // The const keyword specifies that a variable's value is constant
    
    const double PI = 3.1415;
    double radius = 10;
    double circunference = 2 * PI * radius;

    std::cout << circunference << "cm";

    return 0;
}