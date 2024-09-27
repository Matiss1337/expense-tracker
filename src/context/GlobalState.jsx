import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
	transactions: [
		{ id: 1, text: 'Flower', amount: -20 },
		{ id: 2, text: 'Salary', amount: 300 },
		{ id: 3, text: 'Book', amount: -10 },
		{ id: 4, text: 'Camera', amount: 150 }
	]
};

// create context
export const GlobalContext = createContext(initialState);

// create global provider  = thing giving state to other files
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	function deleteTransaction(id) {
		dispatch({
			type: 'DELETE_TRANSACTION',
			payload: id
		})
	}

	function addTransaction(transaction) {
		dispatch({
			type: 'ADD_TRANSACTION',
			payload: transaction
		})
	}

	function resetAll() {
		dispatch({
			type: 'RESET_ALL'
		})
	}


	return (<GlobalContext.Provider value={{
		transactions: state.transactions,
		deleteTransaction,
		addTransaction,
		resetAll
	}}>
		{children}
	</GlobalContext.Provider>)
}