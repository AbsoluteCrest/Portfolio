const MainPage = () => {
    return (
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <div className="rounded-lg p-6 font-roboto font-bold">
                <p className="font-roboto text-4xl mb-3 text-center whitespace-pre-wrap">
                    {splitText("Hi, I'm Absolute Crest")}
                </p>
                <p className="font-roboto text-2xl text-center whitespace-pre-wrap">
                    {splitText("Welcome to my portfolio website")}
                </p>
            </div>
        </main>
    );
};

const splitText = (text : string) => {
    return text.split(" ").map((word, index) => (
        <span
            key={index}
            className={`inline-block opacity-0 animate-fade-in`}
            style={{ animationDelay: `${index * 0.2}s` }}>
            {word}{" "}
        </span>
    ));
};

export default MainPage;
