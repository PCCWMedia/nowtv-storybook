import type { FC, ReactNode } from 'react';
import '../SearchResult.scss';

export interface SearchChannelLink {
	label: string;
	href: string;
	target?: '_self' | '_blank';
}

export interface SearchChannelProps {
	imageSrc: string;
	imageAlt?: string;
	title: ReactNode;
	links: SearchChannelLink[];
	className?: string;
}

const SearchChannel: FC<SearchChannelProps> = ({
	imageSrc,
	imageAlt = '',
	title,
	links,
	className = '',
}) => {
	return (
		<div className={`search-item channel ${className}`.trim()}>
			<div className="image-container">
				<img src={imageSrc} alt={imageAlt} />
			</div>

			<div className="channel-results">
				<h2 className="">{title}</h2>
				<p>
					{links.map((link, index) => {
						const rel = link.target === '_blank' ? 'noopener noreferrer' : undefined;

						return (
							<a
								key={`${link.label}-${index}`}
								href={link.href}
								target={link.target || '_self'}
								rel={rel}
								className="link arrow"
							>
								{link.label}
							</a>
						);
					})}
				</p>
			</div>
		</div>
	);
};

export default SearchChannel;
