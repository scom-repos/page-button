import { Module, customModule, Container } from '@ijstech/components';
import ScomPageButton from '@scom/page-button';

@customModule
export default class Module1 extends Module {
    private pnlButtons: ScomPageButton;

    constructor(parent?: Container, options?: any) {
        super(parent, options);
    }

    async init() {
        super.init();
        const config = this.pnlButtons.getConfigurators()[0];
        if (config?.setTag) config.setTag({
            height: 32,
            textAlign: 'center',
            light: {
                backgroundColor: 'white',
                color: 'black'
            },
            dark: {
                backgroundColor: 'blue',
                color: 'white'
            }
        })
    }

    render() {
        return <i-panel margin={{left: '1rem', top: '1rem'}}>
            <i-page-button
                id="pnlButtons"
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