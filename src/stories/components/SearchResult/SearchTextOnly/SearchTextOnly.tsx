import type { FC, ReactNode } from 'react';
import '../SearchResult.scss';

export interface SearchTextOnlyProps {
	href: string;
	title: ReactNode;
	description: ReactNode;
	target?: '_self' | '_blank';
	className?: string;
}

const SearchTextOnly: FC<SearchTextOnlyProps> = ({
	href,
	title,
	description,
	target = '_self',
	className = '',
}) => {
	const rel = target === '_blank' ? 'noopener noreferrer' : undefined;

	return (
		<a href={href} className={`search-item textOnly ${className}`.trim()} target={target} rel={rel}>
			<h2 className="">{title}</h2>
			<p className="">{description}</p>
		</a>
	);
};

export default SearchTextOnly;
