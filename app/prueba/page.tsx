
'use client';

import 'tailwindcss';
import LikeButton from './things/likebutton';
import UnLikeButton from './things/unlikebutton';
import MoreInfo from './things/showmore';
import Header from './things/title';
      
      export default function HomePage() {
        const names = ["Odio", "a", "los", "negros"]; 

        return (
          <div>
            <Header title="ayuda" />
            <ul>
              {names.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
            <LikeButton />
            <UnLikeButton />
            <MoreInfo />
          </div>
        );
      }
    
      (<HomePage />);
