export const Transaction = ({ transaction }) => {
    const positive = transaction.amount > 0;

    return (
        <li className={`${positive ? 'bg-green-300' : 'bg-red-400'}`}>
			{transaction.text} {positive ? "+" : "-"}{Math.abs(transaction.amount)}
		</li>
    )
}