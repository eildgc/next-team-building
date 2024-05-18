export default function Button({ children, onClick, classes, href}) {
    return (
        <a onClick={onClick} className={classes} href={href}>
        {children}
        </a>
    );
}
