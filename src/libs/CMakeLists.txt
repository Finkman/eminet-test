add_subdirectory(Simple-Web-Server)
add_subdirectory(args)


### Add sources of pjon ###
file(GLOB_RECURSE LIBSOURCES "PJON/*.h")

add_library(pjon STATIC ${LIBSOURCES})
SET_TARGET_PROPERTIES(pjon PROPERTIES LINKER_LANGUAGE CXX)

target_include_directories(pjon
        PUBLIC PJON
)
