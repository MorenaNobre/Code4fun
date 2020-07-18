import styled, { css } from 'styled-components';
import { Home, Notifications, Email, FavoriteBorder, Person, ExitToApp, Rocketseat } from '../../styles/Icons';

export const Container = styled.div`
    display: none;
    @media (min-width: 500px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: sticky;
        top: 0;
        left: 0;
        padding: 9px 19px 20px;
        max-height: 100vh;
        overflow-y: auto;
    }
`;

export const Topside = styled.div``;

export const Logo = styled.div``;

export const MenuButton = styled.div``;

const iconCSS = css`
    flex-shrink: 0;
    height: 30px;
    width: 30px;
    color: var(--white);
`;

export const HomeIcon = styled(Home)`${iconCSS}`;

export const BellIcon = styled(Notifications)`${iconCSS}`;

export const EmailIcon = styled(Email)`${iconCSS}`;

export const FavoriteIcon = styled(FavoriteBorder)`${iconCSS}`;

export const ProfileIcon = styled(Person)`${iconCSS}`;