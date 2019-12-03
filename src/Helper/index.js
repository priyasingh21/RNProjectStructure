import { BASE_URL } from './Constants/apiContants'
import {
    boxShadow,
    outerBoxShadow,
    innerBoxShadow
} from './Constants/shadows'

import {
    wp,
    hp,
    SCREEN_WIDTH,
    SCREEN_HEIGHT,
    normalizeFont,
    RFValue
} from './ResponsiveUI/responsiveScreen';

import {colors} from './Constants/colors';
import {fontStyles, fontSizes} from './Constants/fonts';
import {validateEmail, validateName, validatePasswordConfirmPassword, validatePassword} from './Constants/validations';

export {
    BASE_URL,
    colors,
    boxShadow,
    outerBoxShadow,
    validatePassword,
    validatePasswordConfirmPassword,
    validateName,
    validateEmail,
    innerBoxShadow,
    fontSizes,
    fontStyles,
    wp,
    hp,
    SCREEN_WIDTH,
    SCREEN_HEIGHT,
    normalizeFont,
    RFValue
}
