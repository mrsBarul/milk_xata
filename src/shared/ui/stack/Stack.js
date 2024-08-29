import { forwardRef } from 'react';
import classNames from 'classnames';
import styles from './Stack.module.scss';

const Stack = forwardRef(({
	children,
	className,
	direction = 'directionRow', 
	justify = 'justifyCenter',
	align = 'alignCenter',
	flexWrap = 'flexWrap',
	max,
	...rest
}, ref) => {
	return (
		<div
			ref={ref}
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
	);
});

export default Stack;