import type { FC, ReactNode } from 'react';
import '../SearchResult.scss';

export interface SearchOfferProps {
	href: string;
	imageSrc: string;
	imageAlt?: string;
	title: ReactNode;
	description: ReactNode;
	price: string;
	priceSuffix?: string;
	target?: '_self' | '_blank';
	className?: string;
}

const SearchOffer: FC<SearchOfferProps> = ({
	href,
	imageSrc,
	imageAlt = '',
	title,
	description,
	price,
	priceSuffix = '/ month *',
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
				<p className="">{description}</p>
				<p className="offers">
					<span className="price">{price}</span>
					<span className="price-month"> {priceSuffix}</span>
				</p>
			</div>

		</a>
	);
};

export default SearchOffer;
