import Component from '@ember/component';

export default class TestComponent extends Component {
    init(){
        throw new Error('Error');
    }
}