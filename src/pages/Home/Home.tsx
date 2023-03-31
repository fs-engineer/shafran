import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Home: FC = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h2>{t('menu.home')}</h2>
        </div>
    );
};

export default Home;
