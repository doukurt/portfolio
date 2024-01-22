interface HeaderButtonProps {
    text: string,
    isActive: boolean,
}

const HeaderButton = ({text, isActive}: HeaderButtonProps) => {
    return (
        <button
            className={`text-center h-full w-fit px-1 md:w-32 border-l dark:border-l-divider-primary ${isActive ? "border-b-2 border-green-500 text-green-500 dark:text-white" : ""}`}>
            {text}
        </button>
    )
}

export default HeaderButton;