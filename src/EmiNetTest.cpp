//============================================================================
// Name        : EmiNetTest.cpp
// Author      : Sven Fink
// Version     :
// Copyright   : Your copyright notice
// Description : Hello World in C++, Ansi-style
//============================================================================

#include <args.hxx>
#include <iostream>

using namespace std;

int main(int argc, char** argv) {
  args::ArgumentParser parser("Extensible Media-Independent Network Gateway",
                              "For those about to rock!");
  args::HelpFlag help(parser, "help", "Display this help menu", {'h', "help"});
  args::ValueFlag<int> port(parser, "port", "Port of the WebInterface",
                            {'p', "port"}, 80);

  try {
    parser.ParseCLI(argc, argv);
  } catch (args::Help&) {
    std::cout << parser;
    return 0;
  } catch (args::ParseError& e) {
    std::cerr << e.what() << std::endl;
    std::cerr << parser;
    return 1;
  } catch (args::ValidationError& e) {
    std::cerr << e.what() << std::endl;
    std::cerr << parser;
    return 1;
  }

  cout << "Running on Port: " << args::get(port) << endl;

  cout << "Hello World" << endl;  // prints Hello World
  return 0;
}
