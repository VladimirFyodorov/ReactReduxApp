import {configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
require('jest-extended');

configure({adapter: new Adapter()});

// for jest-extended
const config = {
  "jest": {
    "setupFilesAfterEnv": ["./testSetup.js"]
  }
}

export default config;