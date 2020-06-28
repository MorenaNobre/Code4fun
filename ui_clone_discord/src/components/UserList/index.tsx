import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

//criar componente secundário neste arquivo mesmo:
const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''}/>

            <strong>{nickname}</strong>

            {isBot && <span>Droid</span>}
        </User>
    )
}

const UserList: React.FC = () => {
    return (
        <Container>

            <Role>Disponível - 1</Role>
            <UserRow nickname="Morena - Moguis - Grisa Nobre" />

            <Role>Offline - 18</Role>
            <UserRow nickname="BB-9E" isBot />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano"  />
            <UserRow nickname="Fulano"  />
            <UserRow nickname="C-3PO" isBot />
            <UserRow nickname="Fulano"  />
            <UserRow nickname="Fulano"  />
            <UserRow nickname="Fulano"  />
            <UserRow nickname="BB-8" isBot />
            <UserRow nickname="Fulano"  />
            <UserRow nickname="Fulano"  />
            <UserRow nickname="Fulano"  />
            <UserRow nickname="Fulano"  />
            <UserRow nickname="Fulano"  />
            <UserRow nickname="Fulano"  />
            <UserRow nickname="R2-D2"  isBot />
            <UserRow nickname="Fulano"  />
            <UserRow nickname="Fulano"  />
            <UserRow nickname="Fulano"  />

        </Container>
    )
};

export default UserList;