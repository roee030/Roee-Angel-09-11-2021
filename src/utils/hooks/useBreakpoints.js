import { useLayoutEffect, useState } from 'react';

const MIN_TABLET_WIDTH = 768;
const MIN_DESKTOP_WIDTH = 1200;

export default function useBreakpoints() {
    const [isMobileWidth, setIsMobileWidth] = useState(false);
    const [isTabletWidth, setIsTabletWidth] = useState(false);
    const [isDesktopWidth, setIsDesktopWidth] = useState(false);

    useLayoutEffect(() => {
        const updateWidth = () => {
            const width = window.innerWidth;

            if (width < MIN_TABLET_WIDTH) {
                setIsMobileWidth(true);
                setIsTabletWidth(false);
                setIsDesktopWidth(false);
                return;
            }

            if (width >= MIN_TABLET_WIDTH && width < MIN_DESKTOP_WIDTH) {
                setIsMobileWidth(false);
                setIsTabletWidth(true);
                setIsDesktopWidth(false);
                return;
            }

            if (width >= MIN_DESKTOP_WIDTH) {
                setIsMobileWidth(false);
                setIsTabletWidth(false);
                setIsDesktopWidth(true);
                return;
            }
        };

        window.addEventListener('resize', updateWidth);
        updateWidth();

        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    return {
        isMobileWidth,
        isTabletWidth,
        isDesktopWidth,
    };
}
