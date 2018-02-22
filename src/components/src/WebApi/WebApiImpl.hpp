/*
 * WebApiImpl.hpp
 *
 *  Created on: 22.02.2018
 *      Author: fins
 */

#ifndef COMPONENTS_SRC_WEBAPI_WEBAPIIMPL_HPP_
#define COMPONENTS_SRC_WEBAPI_WEBAPIIMPL_HPP_

#include <WebApi/WebApi.hpp>

namespace emi {
  namespace components {

    class WebApi::Impl
    {
    public:
      Impl( int port );

    private:
      int m_port;
    };
  }
}

#endif /* COMPONENTS_SRC_WEBAPI_WEBAPIIMPL_HPP_ */
