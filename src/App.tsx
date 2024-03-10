//Appt.tsx
//Parent:main.tsx

import './styles/index.css';

import { RouterProvider } from 'react-router-dom';
import useRouter from './hooks/useRouter';



function App(): JSX.Element {
  const router = useRouter();
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
