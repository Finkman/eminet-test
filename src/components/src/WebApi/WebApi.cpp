/*
 * WebApi.cpp
 *
 *  Created on: 22.02.2018
 *      Author: fins
 */

#include "WebApiImpl.hpp"
#include <WebApi/WebApi.hpp>

using namespace emi::components;

WebApi::WebApi( int port ) : m_impl{std::make_unique< Impl >( port )} {}

WebApi::WebApi( std::unique_ptr< Impl > impl ) : m_impl{std::move( impl )} {}
