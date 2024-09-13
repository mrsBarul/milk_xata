import App from '../../../App';
import PrivacyPolicy from '../../../pages/privacyPolicy/PrivacyPolicy';
import TermsOfService from '../../../pages/termsOfService/TermsOfService';


export const routes = [
	{
		path: '/',
		component: App,
	},
	{
		path: '/terms_of_service',
        component: TermsOfService,
	}, 
	{
        path: '/privacy_policy',
        component: PrivacyPolicy,
    }
];
