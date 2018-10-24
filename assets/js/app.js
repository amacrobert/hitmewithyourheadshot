import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

require('../css/app.css');

const tabs = {
    portfolio: 0,
    bookings: 1,
    about: 2,
}

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tabValue: tabs.portfolio,
        }
    }

    handleTabChange = (event, tabValue) => {
        this.setState({tabValue: tabValue});
    };

    render() {
        const { tabValue } = this.state;

        return (
            <div style={{flexGrow: 1}}>
                <AppBar position='static' color='default'>
                    <ToolBar>
                        <Typography variant='h6' color='inherit'>
                            Hit Me With Your Headshot
                        </Typography>
                    </ToolBar>
                    <Tabs value={tabValue} onChange={this.handleTabChange} centered>
                        <Tab label='Portfolio' />
                        <Tab label='Rates & Bookings' />
                        <Tab label='About Me' />
                    </Tabs>
                </AppBar>

                {tabValue === tabs.portfolio && <Typography component='div' style={{padding: 24}}>Portfolio!</Typography> }
                {tabValue === tabs.bookings && <Typography component='div' style={{padding: 24}}>Book now!</Typography> }
                {tabValue === tabs.about && <Typography component='div' style={{padding: 24}}>About!!!</Typography> }
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
