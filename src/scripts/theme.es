import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {
    cyan500, cyan700,
    green100,
    indigoA200,
    pinkA200,
    cyan200,
    blueGrey100,
    greenA100,
    greenA400,
    limeA100,
    grey100, grey300, grey400, grey500,
    white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

// from lightBaseTheme
const theme = getMuiTheme({
    spacing: spacing,
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: cyan200,
        primary2Color: green100,
        primary3Color: grey400,
        accent1Color: pinkA200,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: '#888',
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: cyan500,
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack
    },
    appBar: {
        height: 50
    }
});

export default theme;
