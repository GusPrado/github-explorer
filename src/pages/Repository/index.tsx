import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/43959156?s=200&v=4"
            alt="Nada"
          />
          <div>
            <strong>Nome repo</strong>
            <p>descricao</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>xxx</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>xxx</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>xxx</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="eicneinc">
          <div>
            <strong>rvewv</strong>
            <p>erewrvw</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
