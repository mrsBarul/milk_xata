import classNames from 'classnames'
import styles from './Stack.module.scss'

const Stack = ({
	children,
	className,
	direction = 'directionRow', //column | row
	justify = 'justifyCenter',
	align = 'alignCenter',
	flexWrap = 'flexWrap',
	max,
	...rest
}) => {
	return (
		<div
			className={classNames(styles.flex, className, {
				[styles.max]: max,
				[styles[direction]]: direction,
				[styles[justify]]: justify,
				[styles[align]]: align,
			})}
			{...rest}
		>
			{children}
		</div>
	)
}

export default Stack