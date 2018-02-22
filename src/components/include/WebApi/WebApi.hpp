/*
 * WebApi.hpp
 *
 *  Created on: 22.02.2018
 *      Author: fins
 */

#ifndef COMPONENTS_INCLUDE_WEBAPI_WEBAPI_HPP_
#define COMPONENTS_INCLUDE_WEBAPI_WEBAPI_HPP_

#include <memory>

namespace emi {
  namespace components {
    class WebApi
    {
    public:
      WebApi( int port );

    private:
      class Impl;

      explicit WebApi( std::unique_ptr< Impl > impl );

      std::unique_ptr< Impl > m_impl;
    };
  }
}

#endif /* COMPONENTS_INCLUDE_WEBAPI_WEBAPI_HPP_ */
