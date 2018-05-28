import Characters from './pages/Characters/Characters';
import Comics from './pages/Comics/Comics';
import Creators from './pages/Creators/Creators';
import Series from './pages/Series/Series';

const Pages = [
    {
        path: "/",
        exact: true,
        main: Characters
    },
    {
        path: "/comics",
        exact: true,
        main: Comics
    },
    {
        path: "/creators",
        exact: true,
        main: Creators
    },
    {
        path: "/series",
        exact: true,
        main: Series
    }
]

export default Pages;