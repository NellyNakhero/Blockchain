function Blockchain({name, quantity, onDelete}) {
    return (
        <li className="blockchain">
            <span>{name} - <strong>{quantity}</strong> </span>
            <button onClick={onDelete} className="delete-btn">delete</button>
        </li>
    );
}

export default Blockchain;