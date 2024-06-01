export default function MainCard({key, description, counter}) {
    return(
        <div className="grid-start-1 shrink" key={key}>
            <div className="w-72 md:w-96 h-40 p-8 bg-sky-950 border border-sky-900 rounded-md text-sky-50 relative">
                <span className="absolute z-10 top-0 right-0 pr-6 pt-2">
                {counter}
                </span>
                {description}
            </div>
        </div>
    );
};