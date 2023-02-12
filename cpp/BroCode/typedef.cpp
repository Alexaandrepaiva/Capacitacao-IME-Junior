#include <iostream>
#include <vector>

// typedef std::vector<std::pair<std::string, int>> pairlist_t
using text_t = std::string;
using number_t = int;

int main(){
    // typedef é uma palavra reservada usada para criar um nome adicional (alias) para outro tipo de dado
    // Helps with readability and reduces typos
    // Replaced with "using"

    text_t firstName = "Bro";
    number_t age = 21;

    std::cout << firstName << "\n" << age << std::endl;
    
    return 0;
}
