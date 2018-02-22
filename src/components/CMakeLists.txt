link_directories(
  ${LINK_DIRECTORIES}
)

file(GLOB_RECURSE LIBSOURCES "src/*.cpp")

add_library(components STATIC ${LIBSOURCES})

target_include_directories(components
    PUBLIC include
)