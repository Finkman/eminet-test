add_subdirectory(Simple-Web-Server)


### Add sources of pjon ###
file(GLOB_RECURSE LIBSOURCES "PJON/*.h")

add_library(pjon STATIC ${LIBSOURCES})
SET_TARGET_PROPERTIES(pjon PROPERTIES LINKER_LANGUAGE CXX)

target_include_directories(pjon
        PUBLIC PJON
)


### Add sources of args ###
file(GLOB_RECURSE LIBSOURCES "args/*.hxx")

add_library(args STATIC ${LIBSOURCES})
SET_TARGET_PROPERTIES(args PROPERTIES LINKER_LANGUAGE CXX)

target_include_directories(args
        PUBLIC args
)


