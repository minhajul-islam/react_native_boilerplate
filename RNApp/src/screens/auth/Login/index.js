import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, Strings} from '../../../constants';
import {ToolBar} from '../../../components';
import {LogoSection, FormSection, SubmitSection} from './components';
import Icons from './assets/Icons';
import AppRoutes from '../../AppRoutes';

const Login = ({navigation}) => {
    const [language, setLanguage] = useState('en');
    const {navigate} = navigation;
    const goNext = () => navigate(AppRoutes.USER_STACK);
    const goChangeLanguage = () => {
        Strings.setLanguage(language === 'en' ? 'bn' : 'en');
        setLanguage(language === 'en' ? 'bn' : 'en');
    };

    return (
        <SafeAreaView>
            <ToolBar
                title={Strings.LOGIN_title}
                iconRight={Icons.IconLanguage}
                onPressRight={goChangeLanguage}
            />
            <LogoSection
                text={Strings.LOGIN_logoSection}
                backgroundColor={Colors.secondary}
            />
            <FormSection
                text={Strings.LOGIN_formSection}
                backgroundColor={Colors.failed}
            />
            <SubmitSection
                text={Strings.LOGIN_submitSection}
                backgroundColor={Colors.deepSeaBlue}
                onPress={goNext}
            />

        </SafeAreaView>
    );
};

export default Login;
