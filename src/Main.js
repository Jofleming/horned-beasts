import { Component } from 'react';
import Hornedbeast from './Hornedbeast';

class Main extends Component {
    render() {
        return(
            <>
            <Hornedbeast name={'Unicorn Mask'} url={'https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg'} alt={'Person wearing unicorn mask.'} title={'Unicorn Mask'} description={'Someone wearing a unicorn mask.'}/>
            <Hornedbeast name={'Rhino'} url={'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80'} alt={'Mother Rhino with babies'} title={'Mother Rhino with two babies'} description={'A parent rhino with two babies.'}/>
            </>
        )
    }
}

export default Main;