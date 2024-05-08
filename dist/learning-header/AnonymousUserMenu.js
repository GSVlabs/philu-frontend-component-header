import React from 'react';
import { getConfig } from '@edx/frontend-platform';
import { getLoginRedirectUrl } from '@edx/frontend-platform/auth';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { Button } from '@edx/paragon';
import genericMessages from '../generic/messages';
import messages from './messages';
var AnonymousUserMenu = function AnonymousUserMenu(_ref) {
  var intl = _ref.intl;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
    className: "text-gray-700",
    href: "".concat(getConfig().LMS_BASE_URL, "/courses")
  }, intl.formatMessage(messages.courses)), /*#__PURE__*/React.createElement("div", {
    className: "anonymous-user-menu"
  }, /*#__PURE__*/React.createElement(Button, {
    className: "mr-3",
    variant: "outline-primary",
    href: "".concat(getConfig().LMS_BASE_URL, "/register?next=").concat(encodeURIComponent(global.location.href))
  }, intl.formatMessage(genericMessages.registerSentenceCase)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "".concat(getLoginRedirectUrl(global.location.href))
  }, intl.formatMessage(genericMessages.signInSentenceCase))));
};
AnonymousUserMenu.propTypes = {
  intl: intlShape.isRequired
};
export default injectIntl(AnonymousUserMenu);
//# sourceMappingURL=AnonymousUserMenu.js.map