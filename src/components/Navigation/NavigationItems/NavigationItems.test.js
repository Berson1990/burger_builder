import React from 'react'
import { configure, shallow } from 'enzyme'
import Adabter from 'enzyme-adapter-react-16'
import NavigationItems from './NavigationItems'
import NavigationItem from './NavigationItem/NavigationItem'

configure({ adapter: new Adabter() })

describe('<NavigationItems />', () => {
    let wrapper ;
    beforeEach(()=>{
        wrapper = shallow(<NavigationItems />);
    })
    it('should render two <NaviagationItem /> element if not authenticated ', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2)
    })

    it('should render three <NaviagationItem /> element if  authenticated ', () => {
        // wrapper = shallow(<NavigationItems  isAuthenticated/>);
        wrapper.setProps({isAuthenticated:true})
        expect(wrapper.find(NavigationItem)).toHaveLength(3)
    })

    it('should an exact logout button ', () => {
        wrapper.setProps({isAuthenticated:true})
        expect(wrapper.contains(<NavigationItem link="/logout" >Logout</NavigationItem>)).toEqual(true)
    })
});