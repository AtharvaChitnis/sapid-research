import { useNavigate } from 'react-router-dom';

export const useNavigation = () => {
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(path);
  };

  const navigateToHome = () => {
    navigate('/');
  };

  const navigateToMain = () => {
    navigate('/main');
  };

  const navigateToAbout = () => {
    navigate('/about');
  };

  const navigateToServices = () => {
    navigate('/services');
  };

  const navigateToBlog = () => {
    navigate('/blog');
  };

  const navigateToContact = () => {
    navigate('/contact');
  };

  const navigateToOpinions = () => {
    navigate('/opinions');
  };

  const navigateToPrivacyPolicy = () => {
    navigate('/privacy-policy');
  };

  const navigateToDataRights = () => {
    navigate('/data-rights');
  };

  return {
    navigateTo,
    navigateToHome,
    navigateToMain,
    navigateToAbout,
    navigateToServices,
    navigateToBlog,
    navigateToContact,
    navigateToOpinions,
    navigateToPrivacyPolicy,
    navigateToDataRights,
  };
};
