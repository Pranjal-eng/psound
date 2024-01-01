import { CommonProvider } from './contexts/common/commonContext';
import { CartProvider } from './contexts/cart/cartContext';
import Header from './components/common/Header';
import RouterRoutes from './routes/RouterRoutes';
import { FiltersProvider } from './contexts/filters/filtersContext';


const App = () => {
  return (
    <>
      <CommonProvider>
        <FiltersProvider>
          <CartProvider>
            <Header />
            <RouterRoutes />
           
            
          </CartProvider>
        </FiltersProvider>
      </CommonProvider>
    </>
  );
};

export default App;