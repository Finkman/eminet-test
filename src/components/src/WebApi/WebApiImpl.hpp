/*
 * WebApiImpl.hpp
 *
 *  Created on: 22.02.2018
 *      Author: fins
 */

#ifndef COMPONENTS_SRC_WEBAPI_WEBAPIIMPL_HPP_
#define COMPONENTS_SRC_WEBAPI_WEBAPIIMPL_HPP_

#include <WebApi/WebApi.hpp>

#include <server_http.hpp>

using HttpServer = SimpleWeb::Server< SimpleWeb::HTTP >;

namespace emi {
  namespace components {

    class WebApi::Impl
    {
    public:
      Impl( int port );

    private:
      int m_port;
      HttpServer server;
    };
  }
}

#endif /* COMPONENTS_SRC_WEBAPI_WEBAPIIMPL_HPP_ */
