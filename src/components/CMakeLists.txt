link_directories(
  ${LINK_DIRECTORIES}
)

file(GLOB_RECURSE LIBSOURCES "src/*.cpp")

add_library(components STATIC ${LIBSOURCES})

target_link_libraries(components
  PRIVATE simple-web-server
)

target_include_directories(components
    PUBLIC include
)