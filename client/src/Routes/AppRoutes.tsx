import NotAutorized from './NotAutorized'
import Autorized from './Autorized'
import { RootState } from '../Redux/store/store'
import { useSelector } from 'react-redux'
const AppRoutes = () => {
    const storageToken = localStorage.getItem('storageToken')?.includes('null') ? null : localStorage.getItem('storageToken');
    const reduxToken = useSelector((state: RootState) => state.token.value)


    return (
        storageToken || reduxToken ? <Autorized /> : <NotAutorized />
    )
}

export default AppRoutes