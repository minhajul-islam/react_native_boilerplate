import LocalizedStrings from 'react-native-localization';
import EN from './EN';
import BN from './BN';

let String = new LocalizedStrings({
    en: EN,
    bn: BN,
});

module.exports = String;
