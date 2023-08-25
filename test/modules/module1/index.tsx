import { Module, customModule, Container } from '@ijstech/components';
import assets from '@modules/assets';
import ScomButtons from '@scom/scom-buttons';

@customModule
export default class Module1 extends Module {
    constructor(parent?: Container, options?: any) {
        super(parent, options);
    }

    async init() {
        super.init();
    }

    render() {
        return <i-panel margin={{left: '1rem', top: '1rem'}}>
            <i-scom-buttons
                data={{
                    linkButtons: [
                        {caption: 'New text 1', url: 'google.com'},
                        {caption: 'New text 2', url: 'google.com'}
                    ]
                }}
            />
        </i-panel>
    }
}