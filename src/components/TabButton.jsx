export default function TabButton({children, onSelect }) {
    return (
        <button className="hover:underline" onClick={onSelect}>{children}</button>
    );
}