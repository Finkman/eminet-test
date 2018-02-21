######## Project settings ########
PROJECT(EmiNetTest CXX)
SET(LICENSE "MIT")
cmake_minimum_required (VERSION VERSION 3.1.0)
set(CMAKE_CXX_STANDARD 14)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
cmake_policy(SET CMP0022 NEW)

######## Build and include settings ########
add_subdirectory(libs)

file(GLOB SOURCES
	"./*.cpp"
)

add_executable(
	eminet_test
	${SOURCES}
)

TARGET_LINK_LIBRARIES(
	eminet_test PRIVATE pjon simple-web-server
)

######## Install targets ########
INSTALL(TARGETS eminet_test
	RUNTIME DESTINATION usr/bin
)
