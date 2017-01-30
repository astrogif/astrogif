import 'ignore-styles';
import 'babel-polyfill';

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import chaiProperties from 'chai-properties';

chai.use(chaiAsPromised);
chai.use(chaiProperties);
