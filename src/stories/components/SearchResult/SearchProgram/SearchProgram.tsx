import type { FC, ReactNode } from 'react';
import '../SearchResult.scss';

const escapeRegExp = (value: string): string => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const highlightText = (content: ReactNode, keyword?: string): ReactNode => {
	if (!keyword || typeof content !== 'string') {
		return content;
	}

	const trimmedKeyword = keyword.trim();
	if (!trimmedKeyword) {
		return content;
	}

	const regex = new RegExp(`(${escapeRegExp(trimmedKeyword)})`, 'gi');
	const parts = content.split(regex);
	const lowerKeyword = trimmedKeyword.toLowerCase();

	return parts.map((part, index) => (
		part.toLowerCase() === lowerKeyword
			? <span key={`${part}-${index}`} className="keywords">{part}</span>
			: part
	));
};

export interface SearchProgramProps {
	href: string;
	imageSrc: string;
	imageAlt?: string;
	title: ReactNode;
	channel?: ReactNode;
	description?: ReactNode;
	highlightKeyword?: string;
	ctaLabel?: ReactNode;
	target?: '_self' | '_blank';
	className?: string;
}

const SearchProgram: FC<SearchProgramProps> = ({
	href,
	imageSrc,
	imageAlt = '',
	title,
	channel,
	description,
	highlightKeyword,
	ctaLabel,
	target = '_self',
	className = '',
}) => {
	const rel = target === '_blank' ? 'noopener noreferrer' : undefined;

	return (
		<a href={href} className={`search-item ${className}`.trim()} target={target} rel={rel}>
			<div className="image-container">
				<img src={imageSrc} alt={imageAlt} />
			</div>

			<div className="offer-result">
				<h2 className="">{title}</h2>
				{channel ? <p className="prog_channel">{highlightText(channel, highlightKeyword)}</p> : null}
				{description ? <p className="">{highlightText(description, highlightKeyword)}</p> : null}
				{ctaLabel ? (
					<span className="link arrow">{ctaLabel}</span>
				) : null}
			</div>
		</a>
	);
};

export default SearchProgram;
