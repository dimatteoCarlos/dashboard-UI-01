//Home.tsx
//Parent:useRouter.tsx

import './home.css';

import { gridConfig as gridConfig } from './homeGridConfig.tsx';

const Home = (): JSX.Element => {
  return (
    <>
      <section className='home__container'>
        {gridConfig.map((item) => (
          <div
            className={`home__${item.classname} home__${item.id}`}
            id={`home__${item.id}`}
            key={item.id}
            style={{
              gridColumn: `${item.col__span}`,
              gridRow: `${item.row__span}`,
            }}
          >
            {item.content}
          </div>
        ))}
      </section>
    </>
  );
};

export default Home;
