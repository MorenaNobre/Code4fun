import React from 'react';

import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>

          <ProfileData>

              <EditButton outlined>Editar Perfil</EditButton>

              <h1>Morena Nobre</h1>
              <h2>@morenanobre</h2>
              <p>
                  Student at <a href="https://rocketseat.com.br" target="_blank">@Rocketseat</a>
              </p>

              <ul>
                  <li>
                      <LocationIcon />
                      Sorocaba/SP - Brasil
                  </li>
                  <li>
                      <CakeIcon />
                      Nascido(a) em 19 de novembro de 1982
                  </li>
              </ul>            

              <Followage>
                  <span>
                      seguindo <strong> 148</strong>
                  </span>
                  <span>
                      <strong>214 </strong> seguidores
                  </span>
              </Followage>

          </ProfileData>

          <Feed />
          
      </Container>
  );
}

export default ProfilePage;