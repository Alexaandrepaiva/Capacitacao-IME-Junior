#include <iostream>

int main(){
    
    // cout << (insertion operator)
    // cin >> (extraction operator)

    // Para extrair mais de uma palavra, usar getline()

    std:: string name;
    std:: string adress;

    std:: cout << "Whats your first name?\n";
    std:: cin >> name;

    std:: cout << "Whats your adress?\n";
    std:: getline(std::cin >> std::ws, adress);

    std:: cout << "\nHello, " << name;
    std:: cout << "\nWe will send you package to " << adress;

    return 0;
}
