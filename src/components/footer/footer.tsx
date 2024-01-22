const Footer = () => {
    return (
        <footer
            className="flex w-full flex-row fixed bottom-0 divide-x-2 dark:divide-divider-primary h-12 items-center justify-center border-t dark:border-divider-primary">

            <div className="self-center basis-2/5  sm:max-w-[130px] px-2">find me in:</div>
            <button className="h-full basis-1/5  sm:max-w-[48px]"><i className="bi bi-linkedin"></i></button>
            <button className="h-full basis-1/5 sm:max-w-[48px]"><i className="bi bi-twitter"></i></button>
            <button className="h-full basis-1/5 sm:max-w-[48px]"><i className="bi bi-instagram"></i></button>
            <button onClick={() => window.open('https://github.com/doukurt', '_blank')}
                    className="h-full basis-1/5 sm:max-w-[130px] border-l-2 dark:border-l-divider-primary ml-auto ">
                <span className="hidden sm:inline-block mr-1">@doukurt</span><i className="bi bi-github"></i>
            </button>
        </footer>
    );
}

export default Footer;