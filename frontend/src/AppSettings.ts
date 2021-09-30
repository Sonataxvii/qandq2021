export const server =
  process.env.REACT_APP_ENV === 'production'
    ? 'https://qanda20210929205904.azurewebsites.net'
    : process.env.REACT_APP_ENV === 'staging'
    ? 'https://qanda20210930071146.azurewebsites.net'
    : 'http://localhost:17525';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'dev-blmw-xc4.us.auth0.com',
  client_id: '7XqYinqD60gxa7WRvOJwXlf6ghUNGxJL',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};
