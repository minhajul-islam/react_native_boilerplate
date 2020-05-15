import LocalizedStrings from 'react-native-localization';
import SignUpStrings from '../screens/auth/SignUp/constants/SignUpStrings';
import LoginStrings from '../screens/auth/Login/constants/LoginStrings';
import ProfileStrings from '../screens/user/Profile/constants/ProfileStrings';
import EditProfileStrings from '../screens/user/EditProfile/constants/EditProfileStrings';

let String = new LocalizedStrings({
    en: {
        apps_name: 'My app',
        login: LoginStrings.en,
        signUp: SignUpStrings.en,
        profile: ProfileStrings.en,
        editProfile:EditProfileStrings.en

    },

    bn: {
        apps_name: 'My app',
        login: LoginStrings.bn,
        signUp: SignUpStrings.bn,
        profile: ProfileStrings.bn,
        editProfile:EditProfileStrings.en
    },
});

module.exports = String;
