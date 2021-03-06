import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../config', () => ({
  config: {
    API_DOMAIN: 'A',
    API_BASE_URL: 'B',
    GOOGLE_CLIENT_ID: 'X',
    FACEBOOK_APP_ID: 'Y'
  }
}));

jest.mock('react-hook-form', () => ({
  useForm: jest.fn(() => ({
    register: jest.fn(),
    errors: {},
    handleSubmit: jest.fn((d: any) => d),
    watch: jest.fn()
  }))
}));
