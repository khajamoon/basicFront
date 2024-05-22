'use client'
import { Provider } from 'react-redux'
import { store } from '../redux/store';

function StoreProvider({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }
  
  export default StoreProvider;

