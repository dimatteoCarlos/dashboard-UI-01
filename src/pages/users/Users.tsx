//Users.tsx
//Parents:useRouter.tsx

// import { userRows } from '../../data';

import { usersHeaderColumnData } from './usersHeaderColumns';

import { useState } from 'react';

import { TitleBtnType } from '../../types/types';

import ShowPageTable from '../../components/showPageTable/ShowPageTable';

import AddNew from '../../components/addNew/AddNew';

import { useQuery } from '@tanstack/react-query';

type UsersTypeProp = TitleBtnType;

const Users = ({ title, btnLabel }: UsersTypeProp): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { isLoading, isFetching, error, isError, data } = useQuery({
    queryKey: ['allusers'],
    queryFn: () =>
      fetch('http://localhost:33000/api/users').then((res) => res.json()),
  });

  return (
    <>
      {isError ? 'An error has occurred: ' + error.message : ''}

      {isFetching || isLoading ? (
        'Loading...'
      ) : (
        <ShowPageTable
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          title={title}
          btnLabel={btnLabel}
          // rowsData={userRows}
          rowsData={data}
          headerColumn={usersHeaderColumnData}
          routePage={'users'}
        />
      )}

      <AddNew
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        headersColumn={usersHeaderColumnData}
        itemToAdd='user'
        routePage={'users'}
      />
    </>
  );
};

export default Users;
