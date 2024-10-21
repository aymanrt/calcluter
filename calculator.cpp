#include <string>
#include <sstream>
#include <cmath>

extern "C" {
  double calculate(const char* expression) {
    std::stringstream ss(expression);
    double num1, num2;
    char op;
    ss >> num1 >> op >> num2; /* مبعد  ارفع كود على  guthap */
    switch (op) {
      case '+': return num1 + num2;
      case '-': return num1 - num2;
      case '*': return num1 * num2;
      case '/': return num1 / num2;
      default: return 0; 
    }
  }
}
