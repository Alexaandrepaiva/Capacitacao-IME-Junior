#include <iostream>

namespace first{
    int x = 1;
}

namespace second {
    int x = 2;
}

namespace third {
    int x = 3;
}

int main(){
    // Namespace provides a solution for preventing name conflicts in large projects. Each entity needs a unique name.
    // A namespace allows for identically named entities as long as the namespaces are different

    using namespace third;
    // Quando adicionar a linha
    // using namespace std
    // você não precisa incluir os prefixos "std::"

    std::cout << first::x;
    std::cout << second::x;
    std::cout << x;
    
    return 0;
}
