
/* Not sure but looks like not working with Preact X for now */

import Landing from '../src/pages/landing';
// See: https://github.com/mzgoddard/preact-render-spy
import { shallow } from 'preact-render-spy';

describe('Initial Test of the Header', () => {
	test('Header renders 2 nav items', () => {
		const context = shallow(<Landing />);
		expect(context.find('h1').text()).toBe('Hello World');
	});
});
