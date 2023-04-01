import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from '../../components/LangSwitcher';

const Home: FC = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h2>{t('menu.home')}</h2>
            <LangSwitcher />
        </div>
    );
};

export default Home;
