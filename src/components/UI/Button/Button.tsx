import React from "react";
import { StyledButton } from "./StyledButton";

type ValidElements = React.ElementType;

type InferElement<E> =
	E extends keyof JSX.IntrinsicElements
	? JSX.IntrinsicElements[E] extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<any>, infer Elem>
	? Elem
	: never
	: HTMLElement;

type ButtonOwnProps<E extends ValidElements = typeof defaultElement> = {
	children: React.ReactNode,
	as?: E,
	className?: string,
	startIcon?: React.ReactNode,
	endIcon?: React.ReactNode,
	primary?: boolean,
	withoutVisibleText?: boolean,
	onClick?: React.MouseEventHandler<InferElement<E>>,
	onKeyDown?: React.KeyboardEventHandler<InferElement<E>>,
}

const defaultElement = 'button';


type ButtonProps<E extends ValidElements> = ButtonOwnProps<E> & Omit<React.ComponentPropsWithoutRef<E>, keyof ButtonOwnProps<E>>;

export const Button = <E extends ValidElements = typeof defaultElement>({
	children = null,
	className = '',
	onClick = () => { },
	onKeyDown = () => { },
	startIcon = <></>,
	endIcon = <></>,
	primary = false,
	withoutVisibleText = false,
	as,
	...props
}: ButtonProps<E>) => {
	const Element: React.ElementType = as || defaultElement;

	const clickHandler: React.MouseEventHandler<InferElement<E>> = (e) => {
		onClick(e);
	}

	const keyDownHandler: React.KeyboardEventHandler<InferElement<E>> = (e) => {
		onKeyDown(e);
	}

	return (
		<StyledButton
			as={Element}
			className={className}
			onClick={clickHandler}
			onKeyDown={keyDownHandler}
			primary={primary}
			withoutVisibleText={withoutVisibleText}
			data-testid={Element}
			{...props}
		>
			{startIcon}
			{children}
			{endIcon}
		</StyledButton>
	)
};
