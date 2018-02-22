/*
 * WebApi.hpp
 *
 *  Created on: 22.02.2018
 *      Author: fins
 */

#ifndef COMPONENTS_INCLUDE_WEBAPI_WEBAPI_HPP_
#define COMPONENTS_INCLUDE_WEBAPI_WEBAPI_HPP_

namespace emi {
  namespace components {
    class WebApi
    {
    public:
      WebApi( int port );

    private:
      int m_port;
    };
  }
}

#endif /* COMPONENTS_INCLUDE_WEBAPI_WEBAPI_HPP_ */
