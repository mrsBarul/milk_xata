import React, { useState, useEffect } from 'react';
import styles from './CookieBanner.module.scss'
import Stack from '../../../shared/ui/stack/Stack';
import Button from '../../../shared/ui/button/Button';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [cookiesAccepted, setCookiesAccepted] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem('cookiesAccepted') === 'true';
        setCookiesAccepted(accepted);

        if (!accepted) {
            const timer = setTimeout(() => {
            setIsVisible(true);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        setIsVisible(false);
        localStorage.setItem('cookiesAccepted', 'true');
    };


    if (cookiesAccepted) {
        return null;
    }

    return (
        isVisible && (
        <Stack className={styles.banner} align='alignEnd'>
            <Stack justify='justifyBetween'>
                <p>This website uses cookies to improve your experience. <br/> See our 
                <a href="/privacy_policy" target='_blank' rel="noreferrer"> Privacy Policy </a>to learn more.
                </p>
                <Button onClick={handleAccept} variant='default'>Accept</Button>
            </Stack>
        </Stack>
        )
    );
};


export default CookieBanner;
