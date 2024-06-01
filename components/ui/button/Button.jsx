export default function Button({ children, onClick, className, href}) {
    return (
        <a onClick={onClick} className={className} href={href}>
        {children}
        </a>
    );
}
