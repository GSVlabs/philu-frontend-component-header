import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { Dropdown } from '@edx/paragon';

import messages from './messages';

const showGamification = process.env.ENABLE_RG_GAMIFICATION ? process.env.ENABLE_RG_GAMIFICATION.toLowerCase() === 'true' : null;

const AuthenticatedUserDropdown = ({ intl, username }) => {
  const dashboardMenuItem = (
    <Dropdown.Item href={`${getConfig().LMS_BASE_URL}/dashboard`}>
      {intl.formatMessage(messages.myCourses)}
    </Dropdown.Item>
  );

  const programsMenuItem = (
    <Dropdown.Item href={`${getConfig().LMS_BASE_URL}/programs`}>
      {intl.formatMessage(messages.myPrograms)}
    </Dropdown.Item>
  );

  return (
    <>
      <a className="text-gray-700" href={`${getConfig().LMS_BASE_URL}/courses`}>{intl.formatMessage(messages.courses)}</a>
      <Dropdown className="user-dropdown ml-3">
        <Dropdown.Toggle variant="outline-primary">
          <FontAwesomeIcon icon={faUserCircle} className="d-md-none" size="lg" />
          <span data-hj-suppress className="d-none d-md-inline">
            {username}
          </span>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-right">
          <span className="dropdown-section-name">{intl.formatMessage(messages.dashboard)}</span>
          {dashboardMenuItem}
          {programsMenuItem}
          {showGamification && (
            <>
              <Dropdown.Item href={`${getConfig().LMS_BASE_URL}/gamma_dashboard/dashboard`}>
                {intl.formatMessage(messages.performance)}
              </Dropdown.Item>
              <Dropdown.Item href={`${getConfig().LMS_BASE_URL}/gamma_dashboard/leaderboard`}>
                {intl.formatMessage(messages.leaderboard)}
              </Dropdown.Item>
            </>
          )}
          <span className="dropdown-section-name with-border">{intl.formatMessage(messages.manageInformation)}</span>
          <Dropdown.Item href={getConfig().ACCOUNT_SETTINGS_URL}>
            {intl.formatMessage(messages.myAccount)}
          </Dropdown.Item>
          <Dropdown.Item href={`${getConfig().ACCOUNT_PROFILE_URL}/u/${username}`}>
            {intl.formatMessage(messages.myProfile)}
          </Dropdown.Item>
          <Dropdown.Item href="https://edx.readthedocs.io/projects/open-edx-learner-guide/en/open-release-quince.master/SFD_dashboard_profile_SectionHead.html">
            {intl.formatMessage(messages.helpCenter)}
          </Dropdown.Item>
          { getConfig().ORDER_HISTORY_URL && (
            <Dropdown.Item href={getConfig().ORDER_HISTORY_URL}>
              {intl.formatMessage(messages.orderHistory)}
            </Dropdown.Item>
          )}
          <Dropdown.Item href={getConfig().LOGOUT_URL} className="with-border">
            {intl.formatMessage(messages.signOut)}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

AuthenticatedUserDropdown.propTypes = {
  intl: intlShape.isRequired,
  username: PropTypes.string.isRequired,
};

export default injectIntl(AuthenticatedUserDropdown);
