import './App.css';
import { GlobaProvider } from './context/GlobalProvider';
import Header from "./components/Header"
import {Balance} from "./components/Balance"
import {IncomeExpenses} from "./components/IncomeExpenses"
import { TransactionList } from "./components/TransactionList"
import {AddTransaction} from "./components/AddTransaction"

function App() {
  return (
    <GlobaProvider>
      <div>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobaProvider>
  );
}

export default App;
