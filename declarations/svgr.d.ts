declare module '*.svg' {
	type SVGAndHTMLProps = React.SVGAttributes<SVGElement> | React.HTMLAttributes<SVGElement>
	export const ReactComponent: React.FunctionComponent<SVGAndHTMLProps>;
}