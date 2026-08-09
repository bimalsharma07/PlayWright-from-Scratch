import rawData from './data.json';

export interface UserCredentials {
  username: string;
  password: string;
}

export interface ValidUserTestCase {
  scenario: string;
  credentials: UserCredentials;
}

export interface InvalidUserTestCase {
  scenario: string;
  credentials: UserCredentials;
  expectedError: string;
}

export const VALID_LOGIN_SCENARIOS: ValidUserTestCase[] = [
  { scenario: 'standard user', credentials: rawData.validuser },
  { scenario: 'problem user', credentials: rawData.problemuser },
  { scenario: 'performance glitch user', credentials: rawData.performanceglitchuser },
  { scenario: 'error user', credentials: rawData.erroruser },
  { scenario: 'visual user', credentials: rawData.visualuser },
];

export const INVALID_LOGIN_SCENARIOS: InvalidUserTestCase[] = [
  {
    scenario: 'locked out user',
    credentials: rawData.lockeduser,
    expectedError: 'Sorry, this user has been locked out',
  },
  {
    scenario: 'invalid credentials',
    credentials: rawData.invalidLogin,
    expectedError: 'Username and password do not match',
  },
  {
    scenario: 'empty credentials',
    credentials: rawData.emptyLogin,
    expectedError: 'Username is required',
  },
];