

const FooterButton = (children:JSX.Element,extraClasses:String) => {
    return (
        <button>

            <button className={`h-full basis-1/5  sm:max-w-[48px] ${extraClasses}`}>{children}</button>
        </button>
    );
}

export default FooterButton;