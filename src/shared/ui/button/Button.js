import classNames from 'classnames';
import styles from './Button.module.scss'

const Button = ({
	variant = 'default', 
	children,
	className,
	...rest
}) => {
	const classes = classNames(styles.button, className, styles[variant])
	return (
		<button className={classes} {...rest}>
			{children}
		</button>
	)
}

export default Button;