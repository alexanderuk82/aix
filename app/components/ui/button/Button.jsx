import styles from "./style.module.scss";

const Button = ({ variant = "default", size = "md", className, ...props }) => {
	const buttonVariantClass = styles[`button--${variant}`];
	const buttonSizeClass = styles[`button--${variant}--${size}`];

	const buttonClass = buttonSizeClass || buttonVariantClass;

	const combinedClasses = [buttonClass, className].filter(Boolean).join(" ");

	return (
		<button className={combinedClasses} {...props}>
			{props.children}
		</button>
	);
};

export default Button;
